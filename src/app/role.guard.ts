import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    var role = localStorage.getItem('result')?.toString();
    console.log(role, '=====================role,', typeof role);
    if (role === 'admin') {
      alert('you are  admin');
      this.router.navigate(['/list']);
      return true;
    } else {
      alert('you are not a admin');
      this.router.navigate(['/studentprofile']);
      return false;
    }
  }
}
