import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchBarComponent} from './home/search-bar/search-bar.component';
import {TopListsComponent} from './home/top-lists/top-lists.component';
import {TopTeacherListComponent} from './home/top-lists/top-teacher-list/top-teacher-list.component';
import {TopSchoolListComponent} from './home/top-lists/top-school-list/top-school-list.component';
import {SponsoredArticlesComponent} from './home/sponsored-articles/sponsored-articles.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {ProfessorComponent} from './professor/professor.component';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {FormsModule} from "@angular/forms";
import {ProfessorsService} from "./services/professors.service";
import {SchoolsService} from './services/schools.service';

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
        HomeComponent,
        ProfessorComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [SchoolsService, ProfessorsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
