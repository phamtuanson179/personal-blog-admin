import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { addJwtInterceptor } from "@interceptors/jwt.interceptor";

export const httpInterceptorProviders: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: addJwtInterceptor, multi: true },
];
