import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredArticlesComponent } from './sponsored-articles.component';

describe('SponsoredArticlesComponent', () => {
  let component: SponsoredArticlesComponent;
  let fixture: ComponentFixture<SponsoredArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoredArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
