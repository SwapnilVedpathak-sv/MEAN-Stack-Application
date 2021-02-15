import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

    readonly baseUrl = 'https://mean-curd-app.herokuapp.com'
    readonly fetchUrl = '/studentData'
    readonly url = '/students'
 
  constructor(private http: HttpClient) { }

  getList(){
   return this.http.get(`${this.baseUrl}${this.fetchUrl}`)
  }
  saveResto(data:any){
    // console.warn(data)
    return this.http.post(`${this.baseUrl}${this.url}`,data)
  }
  deleteResto(id:any){
    return this.http.delete(`${this.baseUrl}${this.url}/${id}`)
  }
  getCurrentResto(id:any){
    return this.http.get(`${this.baseUrl}${this.fetchUrl}/${id}`)
  }
  updateResto(id:any,data:any){
    return this.http.put(`${this.baseUrl}${this.url}/${id}`,data)
  }
}


