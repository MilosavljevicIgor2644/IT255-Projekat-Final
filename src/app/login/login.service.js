"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LoginService = (function () {
    function LoginService() {
        this.loginStatusChanged = new core_1.EventEmitter();
        this.loginTypeTest = new core_1.EventEmitter();
    }
    LoginService.prototype.getLoggedInStatus = function () {
        return this.isLoggedIn;
    };
    LoginService.prototype.setLoggedInStatus = function (status) {
        this.isLoggedIn = status;
        this.loginStatusChanged.emit(status);
    };
    LoginService.prototype.setAdmin = function (isAdmin) {
        this.isAdmin = isAdmin;
        this.loginTypeTest.emit(isAdmin);
    };
    LoginService.prototype.getUserType = function () {
        return this.isAdmin;
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map