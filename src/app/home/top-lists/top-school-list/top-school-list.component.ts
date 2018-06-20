import { Component, OnInit } from '@angular/core';
import {School} from "../../../model/school.model";

@Component({
  selector: 'app-top-school-list',
  templateUrl: './top-school-list.component.html',
  styleUrls: ['./top-school-list.component.css']
})
export class TopSchoolListComponent implements OnInit {
  private schoolList: School[] = [];

  constructor() {
      this.schoolList.push(new School("Corvinus University of Budapest", 5));
      this.schoolList.push(new School("Technical University of Budapest", 3))
  }

  ngOnInit() {
  }

}
