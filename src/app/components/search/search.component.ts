import { Component } from '@angular/core';

import { StarwarsService } from '../../services/starwars.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {
	planets: any;
	planet: string;
	populations: any[];
	hit: number;
	searchCount: number;
	lastSearch: any;
	currentTime: any;

	constructor(private starwarsService: StarwarsService) {
		this.planets = [];
		this.populations = [];
		this.hit = 0;
		this.searchCount = 0;
		this.lastSearch = 0;
		this.currentTime = 0;
	}

	allowSearch() {
		let profile = JSON.parse(localStorage.getItem("profile"));
		if(profile.name !== "Luke Skywalker") {
			this.lastSearch = localStorage.getItem("lastSearch");
			this.searchCount = parseInt(localStorage.getItem("searchCount"));
			this.currentTime = Math.floor(Date.now() / 1000);

			if(!this.lastSearch && !this.searchCount) {
				localStorage.setItem("lastSearch", this.currentTime.toString());
				localStorage.setItem("searchCount", '1');
				return true;
			} else if( (this.currentTime - this.lastSearch < 60) && this.searchCount >= 15 ) {
				++this.searchCount;
				localStorage.setItem("lastSearch", this.currentTime.toString())
				localStorage.setItem("searchCount", this.searchCount.toString());
				return false;
			} else if((this.currentTime - this.lastSearch >= 60)) {
				localStorage.setItem("lastSearch", this.currentTime.toString());
				localStorage.setItem("searchCount", '1');
				return true;
			} else {
				++this.searchCount;
				localStorage.setItem("lastSearch", this.currentTime.toString())
				localStorage.setItem("searchCount", this.searchCount.toString());
			    return true;
			}
		} else {
			return true;
		}
	}

	searchPlanet() {
		if(this.allowSearch()) {
			if(this.planet == "") {
				this.planets = [];
			} else {
				let searchTerm = encodeURIComponent(this.planet);
				++this.hit;
				this.starwarsService.searchPlanets(searchTerm, this.hit).subscribe((result:any) => {
					let res = result.res;
					let hit = result.hit;
					
					if(res.count && this.hit === hit) {
						this.populations = [];
						this.planets = res.results;
						this.planets.filter((item:any) => {
							if(!isNaN(parseInt(item.population))) {
								this.populations.push(item.population);
							}
						});
						this.populations = this.populations.sort((a, b) => a - b);
					} else if(res.count == 0) {
						this.planets = false;
					}
				});
			}
		} else {
			alert('You have reached your search rate limit. Cool down for a minute and start searching again.');
			return false;
		}
		
	}
}
