import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { LanguageService, Locale } from "../services/language.service";
import { backend } from "../../app.component";


export interface CvInfo {

    title: string;
    subtitle: string;
    availability: string;
    cover_letter: string;
    location: string;
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    stack: {
        frameworks: string[];
        database: string[];
        language: string[];
        other: string[];
    };
    bio1: string;
    bio2: string;
    bio3: string;
    experience: Array<{
        company: string;
        role: string;
        from: string;
        to: string;
        description: string;
        bullets: string[];
    }>
}

type LoadState = 'idle' | 'loading' | 'loaded' | 'error';



@Injectable({ providedIn: 'root' })
export class CvInfoStore {
    private readonly http = inject(HttpClient);
    private readonly langService: LanguageService = inject(LanguageService);

    readonly _cvInfo = signal<CvInfo | null>(null);
    readonly _state = signal<LoadState>('idle');
    readonly isLoading = computed(() => this._state() === 'loading');

    private readonly memCache = new Map<Locale, CvInfo>();

    constructor() {
        effect(() => {
            const locale = this.langService._locale();
            this.loadForLocale(locale);

        });
    }

    private loadForLocale(locale: Locale) {

        const fromMem = this.memCache.get(locale);
        if (fromMem) {
            this._cvInfo.set(fromMem);
            this._state.set('loaded');
            return;
        }

        const fromLs = this.readFromLocalStorage(locale);

        if (fromLs) {
            this._cvInfo.set(fromLs);
            this.memCache.set(locale, fromLs);
            this._state.set('loaded');
            return;
        }
        
        //from backend
        this._state.set('loading');
        this.http.get<CvInfo>(`${backend}/info`).subscribe({
            next: (data) => {
                this.memCache.set(locale, data);
                this.writeToLocalStorage(locale, data);
                this._cvInfo.set(data);
                this._state.set('loaded');
            },
            error: () => {
                console.error('error trying to get info from BE');
                this._state.set('error');
            }
        });

    }



    private readFromLocalStorage(locale: Locale): CvInfo | null {
        try {
            const raw = localStorage.getItem(`portfolio.cvInfo.${locale}`);
            if (!raw) return null;
            return JSON.parse(raw) as CvInfo;
        } catch {
            console.error('error when trying to get info from LS')
            return null;
        }
    }

    private writeToLocalStorage(locale: Locale, data: CvInfo) {
        try {
            localStorage.setItem(`portfolio.cvInfo.${locale}`, JSON.stringify(data));
        } catch {
            console.error('error when trying to write info to LS')
            return;
        }
    }


}
