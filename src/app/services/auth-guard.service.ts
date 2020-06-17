import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from './user.services';


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private userService: UserService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.userService.isAuth()){
            return true;
        }else{
            this.router.navigate(['/login'])
        }
    }
    
}