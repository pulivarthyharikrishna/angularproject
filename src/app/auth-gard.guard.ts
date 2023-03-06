import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGardGuard implements CanActivate {
  constructor(private router: Router, private service: ServiceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const roles = route.data['roles'];
    let expectedRole;

    if (roles.length) {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === this.service.getRole()) {
          expectedRole = this.service.getRole();
        }
      }
      if (expectedRole && this.service.logintaken()) {
        return true;
      } else {
        this.router.navigate(['/studentprofile']);
        return false;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
