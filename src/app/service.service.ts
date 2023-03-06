import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  urlget = 'http://localhost:4050/api/v1/user/users';
  urlget1 = 'http://localhost:4050/api/v1/user/users1';

  constructor(private http: HttpClient) {}

  addData(data: any) {
    return this.http.post('http://localhost:4050/api/v1/user/store', data);
  }
  getData(Obj: any) {
    return this.http.post(this.urlget, Obj);
  }

  deleteItem(id: any) {
    let url = 'http://localhost:4050/api/v1/user/delete/';
    return this.http.delete(url + id);
  }
  editItem(id: any) {
    let url = 'http://localhost:4050/api/v1/user/oneitem/';
    return this.http.get(url + id);
  }
  updateItem(id: any, data: any) {
    let url = 'http://localhost:4050/api/v1/user/update/';
    console.log(id, '0000000000000000000000000000');
    return this.http.put(url + id, data);
  }

  registerDetails(data: any) {
    let url = 'http://localhost:4050/api/v1/login/register';
    return this.http.post(url, data);
  }
  forgot(data: any) {
    let url = 'http://localhost:4050/api/v1/login/forgot';
    return this.http.put(url, data);
  }
  sigin(data: any) {
    let url = 'http://localhost:4050/api/v1/login/sinin';
    return this.http.post(url, data);
  }
  logintaken() {
    return localStorage.getItem('accessToken');
  }
  getRole() {
    console.log(localStorage.getItem('result')  );
    return localStorage.getItem('result');
  }
}
