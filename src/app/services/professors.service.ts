import {Professor} from "../model/professor.model";
import {Subject} from "rxjs/Subject";
import {Injectable} from "@angular/core";

@Injectable()
export class ProfessorsService {
    private professors: Professor[] = [];
    private activeProfessor: Professor;
    professorChanged = new Subject<Professor>();

    constructor() {
    }

    getProfessors(): Professor[] {
        return this.professors.slice();
    }

    setProfessor(professor: Professor) {
        this.activeProfessor = professor;
        this.professorChanged.next(professor);
    }
}