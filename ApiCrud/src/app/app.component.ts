import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ApiCrud';
  
}


// class Mock{
//   name:String;
//   avatar:String;
//   createdAt:String;
//   constructor(name:String,avatar:String,createdAt:String){
//     this.name = name;
//     this.avatar = avatar;
//     this.createdAt = createdAt;
//   }
// }