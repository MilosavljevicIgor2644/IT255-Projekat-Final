import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoginService {
    private isLoggedIn: boolean; 
    loginStatusChanged: EventEmitter<boolean> = new EventEmitter();
    loginTypeTest: EventEmitter<boolean> = new EventEmitter()
    private status: boolean;
    private isAdmin: boolean;

    getLoggedInStatus() {
        return this.isLoggedIn;   
    }

    setLoggedInStatus(status: boolean) {
        this.isLoggedIn = status;
        this.loginStatusChanged.emit(status);
    }

    setAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
        this.loginTypeTest.emit(isAdmin)
    }

    getUserType() {
        return this.isAdmin;
    }
}