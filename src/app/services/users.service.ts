import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UsersService {
    private currentUser;

    constructor(private httpClient: HttpClient) {
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getMyInfo() {
        return this.httpClient.get("http://0.0.0.0:8080/users/whoami").map(
            (user) => {
                this.currentUser = user;
            }
        )
    }
}