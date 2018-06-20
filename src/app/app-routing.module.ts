import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProfessorComponent} from "./professor/professor.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "professor/:id", component: ProfessorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}