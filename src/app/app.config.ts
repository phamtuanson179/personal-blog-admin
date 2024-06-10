import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import vi from "@angular/common/locales/vi";
import {
  ScreenTrackingService,
  UserTrackingService,
  getAnalytics,
  provideAnalytics,
} from "@angular/fire/analytics";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getDatabase, provideDatabase } from "@angular/fire/database";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getFunctions, provideFunctions } from "@angular/fire/functions";
import { getMessaging, provideMessaging } from "@angular/fire/messaging";
import { getPerformance, providePerformance } from "@angular/fire/performance";
import {
  getRemoteConfig,
  provideRemoteConfig,
} from "@angular/fire/remote-config";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { getVertexAI, provideVertexAI } from "@angular/fire/vertexai-preview";
import { FormsModule } from "@angular/forms";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { addJwtInterceptor } from "@interceptors/add-jwt.interceptor";
import { en_US, provideNzI18n } from "ng-zorro-antd/i18n";
import { routes } from "./app.routes";
import { provideNzIcons } from "./icons-provider";

registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([addJwtInterceptor])),
    provideNzIcons(),
    importProvidersFrom(FormsModule),
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp()
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideVertexAI(() => getVertexAI()),
  ],
};
