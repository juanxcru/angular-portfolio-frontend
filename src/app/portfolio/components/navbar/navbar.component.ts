import { Component, computed, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageService, Locale } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly lang = inject(LanguageService);
  readonly locale = this.lang._locale; // signal readonly
  readonly isEn = computed(() => this.locale() === 'en');
  readonly isEs = computed(() => this.locale() === 'es');

  setLocale(locale: Locale) {
    this.lang.setLocale(locale);
  }
}
