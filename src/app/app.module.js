"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var planet_component_1 = require("./components/planet/planet.component");
var login_component_1 = require("./components/login/login.component");
var search_component_1 = require("./components/search/search.component");
var home_component_1 = require("./components/home/home.component");
var auth_guard_1 = require("./auth.guard");
var starwars_service_1 = require("./services/starwars.service");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, planet_component_1.PlanetComponent, login_component_1.LoginComponent, search_component_1.SearchComponent, home_component_1.HomeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [auth_guard_1.AuthGuard, starwars_service_1.StarwarsService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map