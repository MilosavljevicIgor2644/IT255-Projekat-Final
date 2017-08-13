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
var login_service_1 = require("../login/login.service");
var NavbarComponent = (function () {
    function NavbarComponent(loginService) {
        this.loginService = loginService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this.loginService.getLoggedInStatus();
        this.isAdmin = this.loginService.getUserType();
        this.loginService.loginStatusChanged.subscribe(function (status) {
            _this.isLoggedIn = status;
        });
        this.loginService.loginTypeTest.subscribe(function (isAdmin) {
            _this.isAdmin = isAdmin;
        });
        this.loginService.loginTypeTest.subscribe(function (isAdmin) {
            _this.isAdmin = isAdmin;
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.loginService.setLoggedInStatus(false);
        this.loginService.setAdmin(false);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: "navbar",
        templateUrl: "./navbar.html"
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map