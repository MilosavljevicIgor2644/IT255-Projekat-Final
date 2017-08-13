import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';

import { LoginService } from './login.service';

export class User {
    constructor(
        public email: string,
        public password: string) {}
}

@Component({
    selector: 'login',
    templateUrl: './login.html'
})

export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

    constructor(private http: Http, private router: Router, private loginService: LoginService) {
        if (localStorage.getItem('token') != null) {   
            this.router.navigate(['./']);
        }
    }

    onLogin():void {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', this.loginForm.value.username);
        urlSearchParams.append('password', this.loginForm.value.password);
        var data = urlSearchParams.toString();

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/loginService.php' , data, {
            headers: headers
        })
        .subscribe(
          data => {
              console.log(data);
                if (data["_body"] == "ok") {
                    this.loginService.setLoggedInStatus(true);
                    this.loginService.setAdmin(false)
                    this.router.navigate(['./']);
                    console.log(this.loginService.getLoggedInStatus());

                } else if (data["_body"] == "okadmin") {
                    this.loginService.setLoggedInStatus(true);
                    this.loginService.setAdmin(true);
                    this.router.navigate(['./']);
                    console.log(this.loginService.getUserType());
                } else {
                    alert("Niste uneli dobre kredencijale, probajte ponovo.");
                }          
          }  
        );
        
    }
}