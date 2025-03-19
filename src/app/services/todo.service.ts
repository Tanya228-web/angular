import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  addtask(task:any){
    let url='https://api.freeapi.app/api/v1/todos/';
    return this.http.post(url,task)
  }
  gettask(){
    let url='https://api.freeapi.app/api/v1/todos';
    return this.http.get(url);
  }
  deletetask(id:string){
    let url=`https://api.freeapi.app/api/v1/todos/${id}`;
    return this.http.delete(url)
    
  }

}
