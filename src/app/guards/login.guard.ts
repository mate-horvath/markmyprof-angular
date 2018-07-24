import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {UsersService} from "../services/users.service";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router, private userService: UsersService) {
    }

    canActivate(): boolean {
        if (this.userService.getCurrentUser()) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}