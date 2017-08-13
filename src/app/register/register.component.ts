import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';


@Component({
    selector: 'RegisterComponent',
    templateUrl: './register.html'
})

export class RegisterComponent {
    http: Http;
    router: Router;
    registerForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl()
    });

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }

    onRegister(): void {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('firstName', this.registerForm.value.firstName);
        urlSearchParams.append('lastName', this.registerForm.value.lastName);
        urlSearchParams.append('username', this.registerForm.value.username);
        urlSearchParams.append('password', this.registerForm.value.password);
        var data = urlSearchParams.toString();
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/registerservice.php', data, {
            headers: headers
        })
            .subscribe(
            data => {
                if (data["_body"] == "ok") {
                    this.router.navigate(['./']);
                }
            }
            );
    }
}