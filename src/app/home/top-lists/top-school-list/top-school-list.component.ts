import {Component, OnInit} from '@angular/core';
import {School} from '../../../model/school.model';
import {SchoolsService} from '../../../services/schools.service';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
    selector: 'app-top-school-list',
    templateUrl: './top-school-list.component.html',
    styleUrls: ['./top-school-list.component.css'],
    providers: [DataStorageService, SchoolsService]
})
export class TopSchoolListComponent implements OnInit {
    private schoolList: School[] = [];

    constructor(private dataStorageService: DataStorageService, private schoolsService: SchoolsService) {
    }

    ngOnInit() {
        this.schoolsService.schoolListChanged.subscribe(
            (schools: School[]) => {
                this.schoolList = schools;
            }
        );
        this.dataStorageService.getSchools();

    }

}
