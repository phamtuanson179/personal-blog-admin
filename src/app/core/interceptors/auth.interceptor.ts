import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@shared-services/auth.service";
import { Observable } from "rxjs";

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const _authService = inject(AuthService);
  const _router = inject(Router);
  if (!!_authService._authInfo()) return;
  return next(req);
}
