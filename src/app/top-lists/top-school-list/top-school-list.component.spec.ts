import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSchoolListComponent } from './top-school-list.component';

describe('TopSchoolListComponent', () => {
  let component: TopSchoolListComponent;
  let fixture: ComponentFixture<TopSchoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSchoolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
