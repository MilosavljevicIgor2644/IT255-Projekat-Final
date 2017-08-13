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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/http");
var http_3 = require("@angular/http");
var login_service_1 = require("../login/login.service");
var ShowGymComponent = (function () {
    function ShowGymComponent(http, router, loginService) {
        this.loginService = loginService;
        this.deleteForm = new forms_1.FormGroup({
            delete: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }
    ShowGymComponent.prototype.onDelete = function () {
        var urlSearchParams = new http_3.URLSearchParams();
        urlSearchParams.append('delete', this.deleteForm.value.delete);
        var data = "id=";
        data += this.deleteForm.value.delete.toString();
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/deleteGym.php', data, {
            headers: headers
        })
            .subscribe(function (data) {
            if (data["_body"] == "ok") {
                alert("Teratana uspesno obrisana");
            }
        });
    };
    ShowGymComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = this.loginService.getUserType();
        this.loginService.loginTypeTest.subscribe(function (isAdmin) {
            _this.isAdmin = isAdmin;
        });
        this.http.get("http://localhost/it255v11/returnGyms.php")
            .subscribe(function (gyms) {
            console.log(gyms);
            _this.gyms = JSON.parse(gyms["_body"]).records;
            console.log(_this.gyms);
        }, function (error) {
            console.log(error.text);
        });
    };
    return ShowGymComponent;
}());
ShowGymComponent = __decorate([
    core_1.Component({
        selector: "showGym",
        templateUrl: "./showGym.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, login_service_1.LoginService])
], ShowGymComponent);
exports.ShowGymComponent = ShowGymComponent;
//# sourceMappingURL=showGym.component.js.map