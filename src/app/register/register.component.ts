import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  levels = [
    { name: "student"},
    { name: "admin"}]

    registerdata={name:'',email:'',password:''}


  constructor(private router:Router,private service:ServiceService){}

  registerFun(){
    this.service.registerDetails(this.registerdata).subscribe((result:any)=>{
      if(result){
        this.router.navigate(['/'])
      }
    })

  }


}
