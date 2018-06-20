import {Component, OnInit} from '@angular/core';
import {School} from "../../../model/school.model";
import {SchoolsService} from "../../../services/schools.service";

@Component({
    selector: 'app-top-school-list',
    templateUrl: './top-school-list.component.html',
    styleUrls: ['./top-school-list.component.css'],
    providers: [SchoolsService]
})
export class TopSchoolListComponent implements OnInit {
    private schoolList: School[];

    constructor(private schoolService: SchoolsService) {
    }

    ngOnInit() {
        this.schoolList = this.schoolService.getSchools();
    }

}
