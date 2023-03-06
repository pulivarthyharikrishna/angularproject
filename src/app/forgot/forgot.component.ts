import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  forgotdata={email:'',password:''};
  constructor(private service:ServiceService,private router:Router){}

  forgotFun(data:any){
    console.log(data,'---------------------------forgotdata')
    this.service.forgot(data).subscribe((result)=>{

        this.router.navigate(['/login'])
    
    })
  }

}
