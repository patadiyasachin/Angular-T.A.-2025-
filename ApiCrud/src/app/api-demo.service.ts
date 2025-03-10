import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDemoService {

  private _http=inject(HttpClient)

  apiUrl="https://64a23471b45881cc0ae4e04a.mockapi.io/faculties/"

  getAllFaculty(){
    return this._http.get(this.apiUrl)
  }
  
  getById(id:any){
    return this._http.get(this.apiUrl+""+id)
  }

  delteFaculty(id:any){
    return this._http.delete(this.apiUrl+""+id)
  }

  addFaculty(obj:any){
    return this._http.post(this.apiUrl,obj)
  }

  editFaculty(id:any,obj:any){
    return this._http.put(this.apiUrl+id,obj)
  }
}
