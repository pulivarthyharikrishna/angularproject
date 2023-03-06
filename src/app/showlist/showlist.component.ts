import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
})
export class ShowlistComponent {
  StudentDataSet: any = [];

  obj: any = {
    page: 1,
    size: 5,
    pageSizes: [],
  };

  constructor(private servicedata: ServiceService, private routers: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  getPagination(count: any) {
    const pageSizeArr = [];
    const values = Math.ceil(count / this.obj.size);
    console.log(count, '=================count');
    console.log(values, '===================values');
    for (let i = 0; i < values; i++) {
      pageSizeArr.push(i + 1);
      console.log(typeof pageSizeArr);
    }
    console.log(typeof pageSizeArr);
    return pageSizeArr;
  }

  getAll() {
    this.servicedata.getData(this.obj).subscribe((result: any) => {
      if (result) {
        this.StudentDataSet = result.result.usersData;
        this.obj.pageSizes = this.getPagination(result.result.totalCount);
        console.log(
          result.result.totalCount,
          '==============================result.result.totalCount'
        );
      } else {
        console.log('error');
      }
    });
  }
  onChangePage(event: any) {
    this.obj.page = event;
    this.getAll();
  }
  editFun(id: any) {
    console.log(id, '---------------------------------------listCompent id');
    this.routers.navigate(['/update', id]);
  }
  deleteFun(id: any) {
    this.servicedata.deleteItem(id).subscribe((result: any) => {
      this.StudentDataSet = result.object;
      this.getAll();
    });
  }
}
