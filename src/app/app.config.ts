import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import vi from "@angular/common/locales/vi";
import { FormsModule } from "@angular/forms";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { addJwtInterceptor } from "@interceptors/add-jwt.interceptor";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { en_US, provideNzI18n } from "ng-zorro-antd/i18n";
import { routes } from "./app.routes";
import { appEffects, appStore } from "./app.store";
import { provideNzIcons } from "./icons-provider";

registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(appStore),
    provideEffects(appEffects),
    provideHttpClient(withInterceptors([addJwtInterceptor])),
    provideNzIcons(),
    importProvidersFrom(FormsModule),
    provideNzI18n(en_US),
    provideAnimationsAsync(),
  ],
};
