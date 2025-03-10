import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiDemoService } from '../api-demo.service';

@Component({
  selector: 'app-more-detail',
  imports: [RouterLink],
  templateUrl: './more-detail.component.html',
  styleUrl: './more-detail.component.css'
})
export class MoreDetailComponent {
  private _activatedRoute=inject(ActivatedRoute)
  private _api=inject(ApiDemoService)
  private _router=inject(Router)
  id:any=0

  data:any={}

  ngOnInit(){
    this.id=this._activatedRoute.snapshot.paramMap.get("id")


    this._api.getById(this.id).subscribe((res)=>{
      this.data=res
    })
  }

  // deleteFaculty(id:any){
  //   this._api.deleteFaculty(id).subscribe((res)=>{
  //     this._router.navigate(['/'])
  //   })
  // }
}
