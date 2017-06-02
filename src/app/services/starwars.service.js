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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var StarwarsService = (function () {
    function StarwarsService(http, router) {
        this.http = http;
        this.router = router;
    }
    StarwarsService.prototype.verifyLoginCredentials = function (username) {
        return this.http.get("https://swapi.co/api/people/?search=" + username).map(function (res) { return res.json(); });
    };
    StarwarsService.prototype.searchPlanets = function (planet, hit) {
        return this.http.get("https://swapi.co/api/planets/?search=" + planet).map(function (res) {
            res = res.json();
            return {
                res: res,
                hit: hit
            };
        });
    };
    StarwarsService.prototype.logout = function () {
        localStorage.removeItem("profile");
        localStorage.removeItem("lastSearch");
        localStorage.removeItem("searchCount");
        this.router.navigate(['/']);
    };
    StarwarsService.prototype.authenticated = function () {
        return (localStorage.getItem("profile") ? true : false);
    };
    return StarwarsService;
}());
StarwarsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], StarwarsService);
exports.StarwarsService = StarwarsService;
//# sourceMappingURL=starwars.service.js.map