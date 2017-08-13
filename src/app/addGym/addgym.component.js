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
var AddGymComponent = (function () {
    function AddGymComponent(http, router) {
        this.addGymForm = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            opis: new forms_1.FormControl(),
            cena: new forms_1.FormControl(),
            nivo: new forms_1.FormControl(),
            cilj: new forms_1.FormControl(),
            trener: new forms_1.FormControl(),
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }
    AddGymComponent.prototype.onAdd = function () {
        var _this = this;
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('ime', this.addGymForm.value.ime);
        urlSearchParams.append('opis', this.addGymForm.value.opis);
        urlSearchParams.append('cena', this.addGymForm.value.cena);
        urlSearchParams.append('nivo', this.addGymForm.value.nivo);
        urlSearchParams.append('cilj', this.addGymForm.value.cilj);
        urlSearchParams.append('trener', this.addGymForm.value.trener);
        var data = urlSearchParams.toString();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/addGymService.php', data, {
            headers: headers
        })
            .subscribe(function (data) {
            if (data["_body"] == "ok") {
                _this.router.navigate(['./']);
            }
        });
    };
    return AddGymComponent;
}());
AddGymComponent = __decorate([
    core_1.Component({
        selector: "addGym",
        templateUrl: "./addGym.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AddGymComponent);
exports.AddGymComponent = AddGymComponent;
//# sourceMappingURL=addgym.component.js.map