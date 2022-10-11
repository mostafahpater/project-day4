import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes} from "@angular/router";
import { AddTaskComponent } from './add-task/add-task.component';
import { TasklistComponent } from './tasklist/tasklist.component';

let routes:Routes=[
  {path:'addTask',component:AddTaskComponent},
  {path:'show',component:TasklistComponent},
]


@NgModule({
  exports:[RouterModule],
        imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
