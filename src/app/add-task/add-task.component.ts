import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITaskAdd } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addform: FormGroup;
task:ITaskAdd|any=[];
  constructor(private taskservice:TaskService  ) {
    this.addform = new FormGroup(
      {
       
        title: new FormControl("", [Validators.required, Validators.minLength(5)]),

      }
    )
   }

  ngOnInit(): void {
  }
  add(){
    this.task=this.addform.value as ITaskAdd
    this.taskservice.add(this.task).subscribe({
      next:(value) => {
        console.log(value);
      }
    })
  }

}
