import {Professor} from "../model/professor.model";
import {Subject} from "rxjs/Subject";
import {Injectable} from "@angular/core";

@Injectable()
export class ProfessorsService {
    private professors: Professor[] = [];
    private activeProfessor: Professor;
    professorChanged = new Subject<Professor>();
    professorListChanged = new Subject<Professor[]>();

    constructor() {
    }

    setProfessors(professors: Professor[]) {
        this.professors = professors;
        this.professorListChanged.next(professors);
    }

    setProfessor(professor: Professor) {
        this.activeProfessor = professor;
        this.professorChanged.next(professor);
    }
}