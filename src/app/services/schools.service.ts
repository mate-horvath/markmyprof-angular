import {School} from "../model/school.model";

export class SchoolsService {
    private schoolList: School[] = [];

    constructor() {
        this.schoolList.push(new School("Corvinus University of Budapest", 5));
        this.schoolList.push(new School("Budapest University of Technology and Economics", 3))
    }

    getSchools(): School[] {
        return this.schoolList.slice();
    }
}