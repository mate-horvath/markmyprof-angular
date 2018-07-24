import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../auth.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [AuthService, UsersService]
})
export class RegisterComponent implements OnInit, OnDestroy {

    constructor(private authService: AuthService, private usersService: UsersService, private router: Router) {
    }

    ngOnInit() {
    }

    onSignUp(form: NgForm) {
        const accountType = form.value.accountType;
        const data = {"email": form.value.email, "username": form.value.username, "password": form.value.password};
        this.authService.signUp(data, accountType).subscribe(
            () => {
                this.authService.signIn({"username": form.value.username, "password": form.value.password}).subscribe(
                    () => {
                        this.usersService.getMyInfo().subscribe();
                        this.router.navigate(["/"]);
                    }
                )
            }
        )
    }

    ngOnDestroy() {
    }
}
