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
var router_1 = require("@angular/router");
var starwars_service_1 = require("../../services/starwars.service");
var LoginComponent = (function () {
    function LoginComponent(starwarsService, router) {
        this.starwarsService = starwarsService;
        this.router = router;
        this.error = false;
        if (localStorage.getItem("profile")) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.verifyLogin = function () {
        var _this = this;
        this.error = false;
        var uname = encodeURIComponent(this.username.trim());
        this.starwarsService.verifyLoginCredentials(uname).subscribe(function (res) {
            if (res.count === 1) {
                var birthYear = res.results[0].birth_year;
                if (birthYear === _this.password) {
                    localStorage.setItem("profile", JSON.stringify(res.results[0]));
                    _this.router.navigate(['/']);
                }
                else {
                    _this.error = true;
                }
            }
            else {
                _this.error = true;
            }
            if (_this.error) {
                _this.username = _this.password = '';
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
    }),
    __metadata("design:paramtypes", [starwars_service_1.StarwarsService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map