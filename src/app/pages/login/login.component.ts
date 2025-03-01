import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginobj: any = {

    "EmailId": "",
    "Password": ""
  };
  http = inject(HttpClient);
  router = inject(Router)
  constructor() {

  }
  signup() {
    this.router.navigateByUrl('signup');
  }

  onlogin() {
    // debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.loginobj).subscribe((res: any) => {
      // debugger;
      if (res.result) {

        localStorage.setItem('logintoken', res.data.token);
        this.router.navigateByUrl('dashboard')
        alert("login success");
      }
      else {
        alert("unauthorized");
      }
    })
  }
}
