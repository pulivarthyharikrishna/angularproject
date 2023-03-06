import { Component, Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  data:any={}
  constructor(){}
  ngOnInit(){
    let data: any
    data =localStorage.getItem("result")
    console.log(typeof data, 'sifhdfi')
    console.log(data,'================================================data')
   }

}
