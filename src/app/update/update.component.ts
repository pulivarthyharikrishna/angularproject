import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  data1:any=[];
  constructor(private router:ActivatedRoute,private srvice:ServiceService, private route:Router){}
  //id:string;
  ngOnInit(): void
  {
    console.log(this.router.snapshot,"-------------------------------snapshot")
     this.srvice.editItem(this.router.snapshot.params['_id']).subscribe((result: any) =>
     {

      if(result){
          this.data1=result.response

      }
     })


  }


     onUdate(data:any)
     {
      console.log("",data._id)

        this.srvice.updateItem(data._id,data).subscribe((result:any)=>
        {

           this.route.navigate(['/list'])
        })
     }

}


