import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environments';

export const tmdbInterceptor: HttpInterceptorFn = (req, next) => {

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${environment.accessToken}`,
      accept: 'application/json'
    }
  });

  return next(clonedRequest);
};