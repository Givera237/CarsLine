import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormulaireAjoutComponent } from "./components/formulaire-ajout/formulaire-ajout.component";
import { AjoutVoitureComponent } from "./components/ajout-voiture/ajout-voiture.component";

const routes : Routes =
[
    {path : 'ajout', component: FormulaireAjoutComponent/*, canActivate :[AuthentificationGuard]*/},
    {path : 'voiture', component: AjoutVoitureComponent/*, canActivate :[AuthentificationGuard]*/}


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


export class PublicationRoutingModule
{

}