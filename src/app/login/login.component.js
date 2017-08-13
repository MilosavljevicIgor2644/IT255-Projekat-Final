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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var http_2 = require("@angular/http");
var login_service_1 = require("./login.service");
var User = (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var LoginComponent = (function () {
    function LoginComponent(http, router, loginService) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl()
        });
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('username', this.loginForm.value.username);
        urlSearchParams.append('password', this.loginForm.value.password);
        var data = urlSearchParams.toString();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/loginService.php', data, {
            headers: headers
        })
            .subscribe(function (data) {
            console.log(data);
            if (data["_body"] == "ok") {
                _this.loginService.setLoggedInStatus(true);
                _this.loginService.setAdmin(false);
                _this.router.navigate(['./']);
                console.log(_this.loginService.getLoggedInStatus());
            }
            else if (data["_body"] == "okadmin") {
                _this.loginService.setLoggedInStatus(true);
                _this.loginService.setAdmin(true);
                _this.router.navigate(['./']);
                console.log(_this.loginService.getUserType());
            }
            else {
                alert("Niste uneli dobre kredencijale, probajte ponovo.");
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map