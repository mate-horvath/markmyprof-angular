import { Component, OnInit } from '@angular/core';
import {Professor} from "../../../model/professor.model";

@Component({
  selector: 'app-top-teacher-list',
  templateUrl: './top-teacher-list.component.html',
  styleUrls: ['./top-teacher-list.component.css']
})
export class TopTeacherListComponent implements OnInit {
  private professorList: Professor[] = [];

  constructor() {
      this.professorList.push(new Professor('Mate', 'Horvath', 'Dr', 5));
      this.professorList.push(new Professor('Erik', 'Szigeti', 'Jr', 1))
  }

  ngOnInit() {
  }

}
