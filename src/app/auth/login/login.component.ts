import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService, UsersService]
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private usersService: UsersService) {
    }

    ngOnInit() {
    }

    onLogin(form: NgForm) {
        const password = form.value.password;
        const username = form.value.username;
        this.authService.signIn({"username": username, "password": password}).subscribe(
            () => {
                this.usersService.getMyInfo().subscribe();
                this.router.navigate(["/"]);
            }
        )
    }
}
