import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeacherListComponent } from './top-teacher-list.component';

describe('TopTeacherListComponent', () => {
  let component: TopTeacherListComponent;
  let fixture: ComponentFixture<TopTeacherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTeacherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
