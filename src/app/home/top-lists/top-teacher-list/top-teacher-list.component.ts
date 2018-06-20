import {Component, OnInit} from '@angular/core';
import {ProfessorsService} from "../../../services/professors.service";
import {Professor} from "../../../model/professor.model";

@Component({
    selector: 'app-top-teacher-list',
    templateUrl: './top-teacher-list.component.html',
    styleUrls: ['./top-teacher-list.component.css'],
    providers: [ProfessorsService]
})
export class TopTeacherListComponent implements OnInit {
    private professors: Professor[];

    constructor(private professorsService: ProfessorsService) {
    }

    ngOnInit() {
        this.professors = this.professorsService.getProfessors();
    }

}
