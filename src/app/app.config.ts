import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { appEffects, appStore } from './app.store';
import { addJwtInterceptor } from '@interceptors/add-jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(appStore),
    provideEffects(appEffects),
    provideHttpClient(withInterceptors([addJwtInterceptor])),
  ],
};
