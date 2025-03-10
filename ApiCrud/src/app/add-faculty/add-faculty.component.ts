import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { ApiDemoService } from '../api-demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  imports: [ReactiveFormsModule],
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent {

  private _api=inject(ApiDemoService)
  private _router=inject(Router)
  private _activatedRoute=inject(ActivatedRoute)

  id:any=null
  ngOnInit(){
    this.id=this._activatedRoute.snapshot.paramMap.get("id")

    if(this.id!=null){
      this._api.getById(this.id).subscribe((res)=>{
        this.facultyForm.patchValue(res)
      })
    }
  }


  facultyForm=new FormGroup({
    createdAt:new FormControl(''),
    name:new FormControl(''),
    avatar:new FormControl(''),
    age:new FormControl(''),
    address:new FormControl(''),
    mobileNo:new FormControl('')
  })
  
  addFaculty(obj:any){

    if(this.id){
      this._api.editFaculty(this.id,this.facultyForm.value).subscribe((res)=>{
        this._router.navigate([''])
      })
    }else{
      this._api.addFaculty(obj).subscribe((res)=>{
        this._router.navigate([''])
      })
    }

  }
}
