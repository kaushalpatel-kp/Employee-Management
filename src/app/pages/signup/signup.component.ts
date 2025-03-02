import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,inject,NgModule  } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
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

signupform: FormGroup= new FormGroup({
  emailId: new FormControl("",[Validators.required]),
  fullName: new FormControl("",[Validators.required]),
  password: new FormControl("",[Validators.required,Validators.minLength(4)])
})


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
    this.signupobj = this.signupform.value;
this.createUser();

  }

  onlogin(){
this.router.navigateByUrl('login');
  }
}
