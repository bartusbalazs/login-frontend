import { Component } from '@angular/core';
import {LoginService} from "./login/service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';

  constructor(public loginService:LoginService) {
  }
}
