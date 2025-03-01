import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  router = inject(Router);
   http = inject(HttpClient);

signupobj: any={
  
    "userId": 0,
    "emailId": "",
    "fullName": "",
    "password": ""
  
}


createUser(){
  this.http.post("https://projectapi.gerasim.in/api/UserApp/CreateNewUser",this.signupobj).subscribe((res:any)=>{
   if(res.result){
    this.router.navigateByUrl('login');
    alert("user created");
   }else{
    alert("something wrong");
   }
  })
}
  onsubmit(){
 this.createUser();
  }

  onlogin(){
this.router.navigateByUrl('login');
  }
}
