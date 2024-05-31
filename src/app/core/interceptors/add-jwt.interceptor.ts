import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

export function addJwtInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  if (!req.url.includes("/assets/i18n")) {
    req = req.clone({
      url: environment.apiURL + req.url,
    });
  }

  const token = localStorage.getItem("token");

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }

  return next(req);
}
