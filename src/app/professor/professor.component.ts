import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfessorsService} from "../services/professors.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Professor} from "../model/professor.model";
import {DataStorageService} from "../shared/data-storage.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-professor',
    templateUrl: './professor.component.html',
    styleUrls: ['./professor.component.css'],
    providers: [ProfessorsService, DataStorageService]
})
export class ProfessorComponent implements OnInit, OnDestroy {
    private id: number;
    private professor: Professor;
    private imagePath = "https://pbs.twimg.com/profile_images/819547588/prof_400x400.jpg";
    private subscription: Subscription;

    constructor(private dataService: DataStorageService, private professorsService: ProfessorsService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = +params['id']
        });
        this.subscription = this.professorsService.professorChanged.subscribe(
            (professor: Professor) => {
                this.professor = professor;
            }
        );
        this.dataService.getProfessor(this.id + "")
    }

    ngOnDestroy() {
        this.professorsService.professorChanged.unsubscribe();
    }

}
