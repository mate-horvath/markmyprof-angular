import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopListsComponent } from './top-lists/top-lists.component';
import { TopTeacherListComponent } from './top-lists/top-teacher-list/top-teacher-list.component';
import { TopSchoolListComponent } from './top-lists/top-school-list/top-school-list.component';
import { SponsoredArticlesComponent } from './sponsored-articles/sponsored-articles.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    TopListsComponent,
    TopTeacherListComponent,
    TopSchoolListComponent,
    SponsoredArticlesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
