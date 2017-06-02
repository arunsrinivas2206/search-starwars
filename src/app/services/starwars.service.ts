import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()

export class StarwarsService {
	constructor(private http: Http, private router: Router) {

	}

	verifyLoginCredentials(username: string) {
		return this.http.get("https://swapi.co/api/people/?search="+username).map(res => res.json());
	}

	searchPlanets(planet: string, hit: number) {
		return this.http.get("https://swapi.co/api/planets/?search="+planet).map(res => {
			res = res.json();
			return {
				res: res,
				hit: hit
			};
		});
	}

	logout() {
		localStorage.removeItem("profile");
		localStorage.removeItem("lastSearch");
		localStorage.removeItem("searchCount");
		this.router.navigate(['/']);
	}

	authenticated() {
		return (localStorage.getItem("profile") ? true : false);
	}
}