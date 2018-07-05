import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import 'rxjs/Rx';
import {Professor} from "../model/professor.model";
import {ProfessorsService} from "../services/professors.service";

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private professorsService: ProfessorsService) {
    }

    async getProfessor(id: String) {
        const professor = await this.httpClient.get<Professor>(`http://0.0.0.0:8080/professor/${id}`).toPromise();
        this.professorsService.setProfessor(new Professor(professor["id"], professor["firstName"], professor["lastName"], professor["title"], professor["webSite"]))
    }

    async getProfessors() {
        const professors = await this.httpClient.get<Professor[]>(`http://0.0.0.0:8080/professors`).toPromise();
        let profList: Professor[] = [];
        for (let professor of professors) {
            profList.push(new Professor(professor["id"], professor["firstName"], professor["lastName"], professor["title"], professor["webSite"]));
        }
        console.log(profList);
        this.professorsService.setProfessors(profList);
    }
}