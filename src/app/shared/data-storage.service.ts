import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import {Professor} from '../model/professor.model';
import {ProfessorsService} from '../services/professors.service';
import {SchoolsService} from '../services/schools.service';
import {School} from '../model/school.model';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private professorsService: ProfessorsService, private schoolsService: SchoolsService) {
    }

    async getProfessor(id: String) {
        const professor = await this.httpClient.get<Professor>(`http://0.0.0.0:8080/professor/${id}`).toPromise();
        this.professorsService.setProfessor(new Professor(professor['id'], professor['firstName'], professor['lastName'], professor['title'], professor['webSite'], 3));
    }

    async getProfessors() {
        const professors = await this.httpClient.get<Professor[]>(`http://0.0.0.0:8080/professors`).toPromise();
        const profList: Professor[] = [];
        for (const professor of professors) {
            profList.push(new Professor(professor['id'], professor['firstName'], professor['lastName'], professor['title'], professor['webSite'], 3));
        }
        console.log(profList);
        this.professorsService.setProfessors(profList);
    }

    async getSchools() {
        const schools = await  this.httpClient.get<School[]>(`http://0.0.0.0:8080/schools`).toPromise();
        const schoolList: School[] = [];
        for (const school of schools) {
            schoolList.push(new School(school['name'], school['phoneNumber'], 0, school['webSite']));
        }
        console.log(schoolList);
        this.schoolsService.setSchools(schoolList);
    }
}
