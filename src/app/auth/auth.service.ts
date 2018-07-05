import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../services/users.service";

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient, private usersService: UsersService) {
    }

    signUp(user, accountType) {
        return this.httpClient.post(`http://0.0.0.0:8080/users/sign-up`, user, {params: {["accountType"]: accountType}});
    }

    signIn(user) {
        return this.httpClient.post(`http://0.0.0.0:8080/users/sign-in`, user).map(
            () => {
                this.usersService.getMyInfo().subscribe()
            }
        );
    }
}