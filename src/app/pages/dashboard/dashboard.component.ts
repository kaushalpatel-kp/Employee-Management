import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe,FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userlist : any[]=[];
 

http = inject(HttpClient);
ngOnInit(): void {
    this.getalluser();
}
isLoading = true;
getalluser(){
 
  this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res:any)=>{
    this.userlist = res.data.slice(0, 10);;
    this.isLoading = false;
  },(error)=>{
    this.isLoading = false;
  });
}
}
