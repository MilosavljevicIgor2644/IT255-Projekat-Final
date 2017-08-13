"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routes_1 = require("./routes/app.routes");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var home_component_1 = require("./home/home.component");
var calculator_component_1 = require("./calculator/calculator.component");
var register_component_1 = require("./register/register.component");
var addgym_component_1 = require("./addGym/addgym.component");
var showGym_component_1 = require("./showGym/showGym.component");
var login_component_1 = require("./login/login.component");
var login_service_1 = require("./login/login.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routes_1.routing],
        declarations: [app_component_1.AppComponent, home_component_1.HomePageComponent, calculator_component_1.CalculatorComponent, navbar_component_1.NavbarComponent, register_component_1.RegisterComponent, addgym_component_1.AddGymComponent, showGym_component_1.ShowGymComponent, login_component_1.LoginComponent],
        providers: [login_service_1.LoginService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map