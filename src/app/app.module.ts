import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {TeamsComponent} from "./teams/teams.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
