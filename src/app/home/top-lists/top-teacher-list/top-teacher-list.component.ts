import {Component, OnDestroy, OnInit} from '@angular/core';
import {Professor} from "../../../model/professor.model";
import {DataStorageService} from "../../../shared/data-storage.service";
import {ProfessorsService} from "../../../services/professors.service";

@Component({
    selector: 'app-top-teacher-list',
    templateUrl: './top-teacher-list.component.html',
    styleUrls: ['./top-teacher-list.component.css'],
    providers: [DataStorageService, ProfessorsService]
})
export class TopTeacherListComponent implements OnInit {
    private professors: Professor[] = [];

    constructor(private dataStorageService: DataStorageService, private professorsService: ProfessorsService) {
    }

    ngOnInit() {
        this.professorsService.professorListChanged.subscribe(
            (professors: Professor[]) => {
                this.professors = professors;
            }
        );
        this.dataStorageService.getProfessors();
    }
}
