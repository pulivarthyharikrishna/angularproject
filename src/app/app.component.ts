import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project4';
  token: any;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.token = localStorage.getItem('accessToken');
  }

  logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('result');
    this.router.navigate(['/login']);
  }
}
