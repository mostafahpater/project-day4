import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';
let routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskComponent,
    TasklistComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // HttpClient,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
