import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

export   const authGuard:CanActivateFn=(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>{
    const auth=inject(AuthService)
    const _Router=inject(Router)
    if(auth.UserData.getValue()!=null){
      return    true
    }else{
      console.log('false')
      _Router.navigate(['/login'])
      return false
    }

}
