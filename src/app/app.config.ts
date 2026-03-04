import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { acceptLanguageInterceptor } from './portfolio/interceptors/language-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([acceptLanguageInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling ({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }))
  ]
};
