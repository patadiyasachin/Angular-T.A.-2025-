import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router)
  if(localStorage.getItem("email") && localStorage.getItem("password")){
    return true;
  }else{
    _router.navigate(['/login']);
    return false;
  }
};
