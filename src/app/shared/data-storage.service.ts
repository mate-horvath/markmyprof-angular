<<<<<<< HEAD
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
=======
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
>>>>>>> 3e21c11d077078be16320f1eb9eaf119b4385dd5
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
        this.professorsService.setProfessor(new Professor(professor['id'], professor['firstName'], professor['lastName'], professor['title'], professor['webSite']));
    }

    async getProfessors() {
        const professors = await this.httpClient.get<Professor[]>(`http://0.0.0.0:8080/professors`).toPromise();
        const profList: Professor[] = [];
        for (const professor of professors) {
            profList.push(new Professor(professor['id'], professor['firstName'], professor['lastName'], professor['title'], professor['webSite']));
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
