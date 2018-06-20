import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { TopListsComponent } from './home/top-lists/top-lists.component';
import { TopTeacherListComponent } from './home/top-lists/top-teacher-list/top-teacher-list.component';
import { TopSchoolListComponent } from './home/top-lists/top-school-list/top-school-list.component';
import { SponsoredArticlesComponent } from './home/sponsored-articles/sponsored-articles.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    TopListsComponent,
    TopTeacherListComponent,
    TopSchoolListComponent,
    SponsoredArticlesComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
