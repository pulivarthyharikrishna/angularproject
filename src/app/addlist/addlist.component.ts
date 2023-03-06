import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent {

  userdata = { name:'',
    cellnumber:'',
    branch:'',
    city:''};
    constructor(private serviceData:ServiceService,private router:Router){}
    addFun(data:any)
    {
      if(!data.name){
          alert('please insert your name')
      }
      else if(!data.cellnumber){
        alert('please insert cellnumber')
      }
      else if(!data.branch){
        alert('please insert branch')
      }
      else if(!data.city){
        alert('please insert city')
      }
      else{
      this.serviceData.addData(data).subscribe((result) =>{
        console.log(data,"++++++++++++++++++++++++++++++++++++++++++++++++++++++AddData")
        this.router.navigate(['/list'])

      })

    }
    }

  }


