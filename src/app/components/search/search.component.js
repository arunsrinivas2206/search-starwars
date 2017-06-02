"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var starwars_service_1 = require("../../services/starwars.service");
var SearchComponent = (function () {
    function SearchComponent(starwarsService) {
        this.starwarsService = starwarsService;
        this.planets = [];
        this.populations = [];
        this.hit = 0;
        this.searchCount = 0;
        this.lastSearch = 0;
        this.currentTime = 0;
    }
    SearchComponent.prototype.allowSearch = function () {
        var profile = JSON.parse(localStorage.getItem("profile"));
        if (profile.name !== "Luke Skywalker") {
            this.lastSearch = localStorage.getItem("lastSearch");
            this.searchCount = parseInt(localStorage.getItem("searchCount"));
            this.currentTime = Math.floor(Date.now() / 1000);
            if (!this.lastSearch && !this.searchCount) {
                localStorage.setItem("lastSearch", this.currentTime.toString());
                localStorage.setItem("searchCount", '1');
                return true;
            }
            else if ((this.currentTime - this.lastSearch < 60) && this.searchCount >= 15) {
                ++this.searchCount;
                localStorage.setItem("lastSearch", this.currentTime.toString());
                localStorage.setItem("searchCount", this.searchCount.toString());
                return false;
            }
            else if ((this.currentTime - this.lastSearch >= 60)) {
                localStorage.setItem("lastSearch", this.currentTime.toString());
                localStorage.setItem("searchCount", '1');
                return true;
            }
            else {
                ++this.searchCount;
                localStorage.setItem("lastSearch", this.currentTime.toString());
                localStorage.setItem("searchCount", this.searchCount.toString());
                return true;
            }
        }
        else {
            return true;
        }
    };
    SearchComponent.prototype.searchPlanet = function () {
        var _this = this;
        if (this.allowSearch()) {
            if (this.planet == "") {
                this.planets = [];
            }
            else {
                var searchTerm = encodeURIComponent(this.planet);
                ++this.hit;
                this.starwarsService.searchPlanets(searchTerm, this.hit).subscribe(function (result) {
                    var res = result.res;
                    var hit = result.hit;
                    if (res.count && _this.hit === hit) {
                        _this.populations = [];
                        _this.planets = res.results;
                        _this.planets.filter(function (item) {
                            if (!isNaN(parseInt(item.population))) {
                                _this.populations.push(item.population);
                            }
                        });
                        _this.populations = _this.populations.sort(function (a, b) { return a - b; });
                    }
                    else if (res.count == 0) {
                        _this.planets = false;
                    }
                });
            }
        }
        else {
            alert('You have reached your search rate limit. Cool down for a minute and start searching again.');
            return false;
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search',
        templateUrl: 'search.component.html',
    }),
    __metadata("design:paramtypes", [starwars_service_1.StarwarsService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map