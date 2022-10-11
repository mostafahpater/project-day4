import { Injectable } from '@angular/core';
import { ITaskGet, ITaskAdd } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/apirespo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<APIResponse<ITaskGet[]>> {
    return this.http.get<APIResponse<ITaskGet[]>>(
      environment.APIURl + 'Task/Get'
    );
  }
  add(task:ITaskAdd) {
    console.log(task);
    return this.http.post(environment.APIURl + 'Task/POST', task);
  }
  delete(id:string){
    return this.http.delete(environment.APIURl+"Task/Delete?id="+id)
  }
}
