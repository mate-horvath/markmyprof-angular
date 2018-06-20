import {Component, OnInit} from '@angular/core';
import {ProfessorsService} from "../services/professors.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Professor} from "../model/professor.model";

@Component({
    selector: 'app-professor',
    templateUrl: './professor.component.html',
    styleUrls: ['./professor.component.css'],
    providers: [ProfessorsService]
})
export class ProfessorComponent implements OnInit {
    private id: number;
    private professor: Professor;
    private imagePath = "https://pbs.twimg.com/profile_images/819547588/prof_400x400.jpg";

    constructor(private professorsService: ProfessorsService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = +params['id']
        });
        this.professor = this.professorsService.getProfessor(this.id);
    }

}
