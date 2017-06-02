"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var search_component_1 = require("./components/search/search.component");
var home_component_1 = require("./components/home/home.component");
var auth_guard_1 = require("./auth.guard");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map