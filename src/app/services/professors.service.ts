import {Professor} from "../model/professor.model";

export class ProfessorsService {
    private professors: Professor[] = [];


    constructor() {
        this.professors.push(new Professor('Mate', 'Horvath', 'Dr', 5, 'BCE'));
        this.professors.push(new Professor('Erik', 'Szigeti', 'Jr', 1, 'BME'))
    }

    getProfessors(): Professor[] {
        return this.professors.slice();
    }

    getProfessor(id: number): Professor {
        return this.professors[id];
    }
}