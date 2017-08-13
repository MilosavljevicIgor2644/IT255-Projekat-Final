"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("../home/home.component");
var calculator_component_1 = require("../calculator/calculator.component");
var register_component_1 = require("../register/register.component");
var addgym_component_1 = require("../addGym/addgym.component");
var showGym_component_1 = require("../showGym/showGym.component");
var login_component_1 = require("../login/login.component");
var appRoutes = [
    { path: '', component: home_component_1.HomePageComponent },
    { path: 'calculator', component: calculator_component_1.CalculatorComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'addGym', component: addgym_component_1.AddGymComponent },
    { path: 'showGym', component: showGym_component_1.ShowGymComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map