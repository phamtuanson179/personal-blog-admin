import { inject } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "@shared-services/auth.service";
import { filter, map } from "rxjs";

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return toObservable(authService._authInfo).pipe(
    filter((info) => info !== undefined),
    map((info) => {
      if (info) return true;

      router.navigate(["auth", "login"]);
      return false;
    })
  );
};
