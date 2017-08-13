import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Gym } from '../gym'; 


@Component({
    selector: "calculator",
    templateUrl: "./calculator.html"
})

export class CalculatorComponent {

    calculatorForm = new FormGroup({
        minPrice: new FormControl(),
        maxPrice: new FormControl(),
        level: new FormControl(),
        goal: new FormControl(),
        trainer: new FormControl(),
    });

    http: Http;
    router: Router;
    private gyms: any;

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if(localStorage.getItem('token') != null) {
        this.router.navigate(['./']);
    }
    }

onCalculate():void {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('minPrice', this.calculatorForm.value.minPrice);
    urlSearchParams.append('maxPrice', this.calculatorForm.value.maxPrice);
    urlSearchParams.append('level', this.calculatorForm.value.level);
    urlSearchParams.append('goal', this.calculatorForm.value.goal);
    urlSearchParams.append('trainer', this.calculatorForm.value.trainer);

    var data = urlSearchParams.toString();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255v11/findGyms.php', data, {
        headers: headers
    })
        .subscribe(
            (gyms) => {
                console.log(gyms);
                this.gyms = JSON.parse(gyms["_body"]).records;
                console.log(this.gyms);
            },
            (error) => {
                console.log(error.text);
            }
        );
  
 }
}