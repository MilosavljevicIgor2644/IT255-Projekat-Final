import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Gym } from '../gym';
import { FormGroup, FormControl } from '@angular/forms';
import { Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { LoginService } from '../login/login.service';
import { OnInit } from '@angular/core';

@Component ({
    selector: "showGym",
    templateUrl: "./showGym.html"
})

export class ShowGymComponent implements OnInit{
    private gyms: any;
    http: Http;
    router: Router;

    deleteForm = new FormGroup({
        delete: new FormControl()
    });

    isAdmin: boolean;

    constructor(http: Http, router: Router, private loginService: LoginService) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;

        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }

    onDelete():void{
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('delete', this.deleteForm.value.delete);
        var data = "id=";
        data += this.deleteForm.value.delete.toString();
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/deleteGym.php', data, {
            headers: headers
        })
            .subscribe(
            data => {
                if (data["_body"] == "ok") {
                    alert("Teratana uspesno obrisana");
                }
            }
            );
    }

    ngOnInit() {
        this.isAdmin = this.loginService.getUserType();

        this.loginService.loginTypeTest.subscribe(
            (isAdmin: boolean) => {
                this.isAdmin = isAdmin;
            }
        )

        this.http.get("http://localhost/it255v11/returnGyms.php")
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