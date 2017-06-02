import { Component } from '@angular/core';

import { StarwarsService } from '../../services/starwars.service';

@Component({
  moduleId: module.id,
  selector: 'planet',
  templateUrl: 'planet.component.html',
})
export class PlanetComponent  { 
	constructor(private starwarsService: StarwarsService) {
		
	}
}
