import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signindata = { email: '', password: '' };

  details = { _id: '', name: '', email: '' };
  constructor(private service: ServiceService, private router: Router) {}
  signInFun() {
    this.service.sigin(this.signindata).subscribe((result: any) => {
      if (result.status === 200) {
        localStorage.setItem('accessToken', result.token);
        localStorage.setItem('result', result.result.name);
        this.router.navigate(['/studentprofile']);
      } else if (result.status === 401) {
        alert('not valid password');
      } else {
        alert('not valid details');
      }
    });
  }
}
