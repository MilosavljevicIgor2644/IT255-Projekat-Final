import { Component, Directive, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { LoginService } from '../login/login.service';

@Component ({
    selector: "navbar",
    templateUrl: "./navbar.html"
})
export class NavbarComponent implements OnInit {
    isLoggedIn: boolean;
    isAdmin: boolean;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.isLoggedIn = this.loginService.getLoggedInStatus();
        this.isAdmin = this.loginService.getUserType();

        this.loginService.loginStatusChanged.subscribe(
            (status: boolean) => {
                this.isLoggedIn = status;
            }  
        )

        this.loginService.loginTypeTest.subscribe(
            (isAdmin: boolean) => {
                this.isAdmin = isAdmin;
            }
        )

        this.loginService.loginTypeTest.subscribe(
            (isAdmin: boolean) => {
                this.isAdmin = isAdmin;
            }
        )
    }

    onLogout() {
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.loginService.setLoggedInStatus(false);
        this.loginService.setAdmin(false);
    }
}