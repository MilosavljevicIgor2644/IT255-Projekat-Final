import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';


@Component({
    selector: "addGym",
    templateUrl: "./addGym.html"
})

export class AddGymComponent {
    http: Http;
    router: Router;
    addGymForm = new FormGroup({
        ime: new FormControl(),
        opis: new FormControl(),
        cena: new FormControl(),
        nivo: new FormControl(),
        cilj: new FormControl(),
        trener: new FormControl(),
    });

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if(localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }

    onAdd(): void {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('ime', this.addGymForm.value.ime);
        urlSearchParams.append('opis', this.addGymForm.value.opis);
        urlSearchParams.append('cena', this.addGymForm.value.cena);
        urlSearchParams.append('nivo', this.addGymForm.value.nivo);
        urlSearchParams.append('cilj', this.addGymForm.value.cilj);
        urlSearchParams.append('trener', this.addGymForm.value.trener);

        var data = urlSearchParams.toString();
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255v11/addGymService.php', data, {
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




