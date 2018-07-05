import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../auth.service";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [AuthService]
})
export class RegisterComponent implements OnInit, OnDestroy {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSignUp(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        const username = form.value.username;
        const accountType = form.value.accountType;
        this.authService.signUp({"email": email, "username": username, "password": password}, accountType).subscribe()
    }

    ngOnDestroy() {
    }
}
