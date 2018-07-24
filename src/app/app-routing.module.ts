import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProfessorComponent} from "./professor/professor.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "professor/:id", component: ProfessorComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}