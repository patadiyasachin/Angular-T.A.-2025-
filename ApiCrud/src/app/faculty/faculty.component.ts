import { Component, inject } from '@angular/core';
import { ApiDemoService } from '../api-demo.service';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  imports: [NgFor,RouterLink,ReactiveFormsModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  private _api=inject(ApiDemoService)
  private _router=inject(Router)

  facultyArray:any=[]

  // fac = new FormGroup({
  //   name: new FormControl('')
  // })

  ngOnInit(){
    // this.fac.controls['name'].setValue("jay")
    this._api.getAllFaculty().subscribe((res)=>{
      this.facultyArray=res
    }) 
  }

  deleteFaculty(id:any){
    this._api.delteFaculty(id).subscribe((res)=>{
      this.ngOnInit()
    })
  }
}
