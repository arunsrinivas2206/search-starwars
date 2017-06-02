import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {StarwarsService} from './services/starwars.service';

@Injectable()

export class AuthGuard implements CanActivate {
	constructor(private starwarsService:StarwarsService, private router:Router) {

	}

	canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if(this.starwarsService.authenticated()) {
			return true;
		} else {
			this.router.navigate(['/']);
			return false;
		}
	}
}