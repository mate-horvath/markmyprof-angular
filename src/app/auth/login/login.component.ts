import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onLogin(form: NgForm) {
        const password = form.value.password;
        const username = form.value.username;
        this.authService.signIn({"username": username, "password": password})
    }
}
