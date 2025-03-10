import { Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { MoreDetailComponent } from './more-detail/more-detail.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

export const routes: Routes = [
    {path:'',component:FacultyComponent},
    {path:'faculty/add',component:AddFacultyComponent},
    {path:'faculty/edit/:id',component:AddFacultyComponent},
    {path:'faculty/:id',component:MoreDetailComponent},
];
