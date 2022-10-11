import { Component, OnInit } from '@angular/core';
import { ITaskAdd, ITaskGet } from '../model/task';
import { TaskService } from '../service/task.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  list: ITaskGet|any=[];
  isloading= true;
  constructor(private taskservice:TaskService) { }
  
  ngOnInit(): void {
    this.isloading= true;
    this.FetchData()

  }

  FetchData() {
    this.taskservice.getAll().subscribe({
      next:(response) => {
        this.list = response.Data;
        this.isloading = false
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  delete(id:any){
this.taskservice.delete(id).subscribe({
  next:(value) => {
    console.log(value);
    this.FetchData()
  }
})
  }

}
