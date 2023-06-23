import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { DetailsComponent } from "./components/details/details.component";


const routes: Routes =
[
    {path: '', component: AccueilComponent },
    {path: ':id', component : DetailsComponent}
]  


@NgModule
(
    {
        imports: 
        [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    }
) 

export class ReadVoitureRoutingModule
{

}