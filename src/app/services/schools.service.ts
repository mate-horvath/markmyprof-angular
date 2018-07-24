import {School} from '../model/school.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SchoolsService {
    private schoolList: School[] = [];
    private activeSchool: School;
    schoolChanged = new Subject<School>();
    schoolListChanged = new Subject<School[]>();

    constructor() {
    }

    getSchools(): School[] {
        return this.schoolList.slice();
    }

    setSchools(schools: School[]) {
        this.schoolList = schools;
        this.schoolListChanged.next(schools);
    }

    setSchool(school: School) {
        this.activeSchool = school;
        this.schoolChanged.next(school);
    }

}
