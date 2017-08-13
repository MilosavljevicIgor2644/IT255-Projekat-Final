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
var CalculatorComponent = (function () {
    function CalculatorComponent(http, router) {
        this.calculatorForm = new forms_1.FormGroup({
            minPrice: new forms_1.FormControl(),
            maxPrice: new forms_1.FormControl(),
            level: new forms_1.FormControl(),
            goal: new forms_1.FormControl(),
            trainer: new forms_1.FormControl(),
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }
    CalculatorComponent.prototype.onCalculate = function () {
        var _this = this;
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('minPrice', this.calculatorForm.value.minPrice);
        urlSearchParams.append('maxPrice', this.calculatorForm.value.maxPrice);
        urlSearchParams.append('level', this.calculatorForm.value.level);
        urlSearchParams.append('goal', this.calculatorForm.value.goal);
        urlSearchParams.append('trainer', this.calculatorForm.value.trainer);
        var data = urlSearchParams.toString();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/findGyms.php', data, {
            headers: headers
        })
            .subscribe(function (gyms) {
            console.log(gyms);
            _this.gyms = JSON.parse(gyms["_body"]).records;
            console.log(_this.gyms);
        }, function (error) {
            console.log(error.text);
        });
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    core_1.Component({
        selector: "calculator",
        templateUrl: "./calculator.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], CalculatorComponent);
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map