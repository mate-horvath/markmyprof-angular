import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) {
    }

    signUp(user, accountType) {
        return this.httpClient.post(`http://0.0.0.0:8080/users/sign-up`, user, {params: {["accountType"]: accountType}});
    }

    signIn(user) {
        return this.httpClient.post(`http://0.0.0.0:8080/users/sign-up`, user);
    }
}