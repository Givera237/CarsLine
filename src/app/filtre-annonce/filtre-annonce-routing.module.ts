import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FiltreComponent } from "./components/filtre/filtre.component";


const routes : Routes =
[
    {path : '', component: FiltreComponent/*, canActivate :[AuthentificationGuard]*/},


]


@NgModule
(
    {
        imports : 
        [
            RouterModule.forChild(routes)
        ],
        exports: 
        [
            RouterModule
        ]
    }
)


export class FiltreAnnonceRoutingModule
{

}