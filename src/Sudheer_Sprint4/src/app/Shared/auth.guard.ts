import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginAuthenticationService } from "src/app/login/login-maincontent/Services/login-authentication.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
   
   constructor(private router:Router, private authservice:LoginAuthenticationService){

   }
   
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isLoggedIn = this.authservice.isLoggedIn();
        
        if(!isLoggedIn){
           
            return true
        }

        this.router.navigate(['User']);
        return false;
        

    }


}