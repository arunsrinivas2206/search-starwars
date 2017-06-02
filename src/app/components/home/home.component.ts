import { Component } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent  {
	profile: any;

	constructor(private starwarsService: StarwarsService) {
		this.profile = JSON.parse(localStorage.getItem("profile"));
	}

}
