import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StarwarsService } from '../../services/starwars.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent  {
	username: string;
	password: string;
	error: boolean;
	constructor(private starwarsService: StarwarsService, private router: Router) {
		this.error = false;
		if(localStorage.getItem("profile")) {
			this.router.navigate(['/']);
		}
	}
	verifyLogin() {
		this.error = false;
		let uname = encodeURIComponent(this.username.trim());

		this.starwarsService.verifyLoginCredentials(uname).subscribe(res => {
			if(res.count === 1) {
				let birthYear = res.results[0].birth_year;
				if(birthYear === this.password) {
					localStorage.setItem("profile", JSON.stringify(res.results[0]));
					this.router.navigate(['/']);
				} else {
					this.error = true;
				}
			} else {
				this.error = true;
			}
			if(this.error) { 
				this.username = this.password = '';
			}
		});
	}
}
