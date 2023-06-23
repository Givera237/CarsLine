import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationRoutingModule } from './publication-routing.module';
import { FormulaireAjoutComponent } from './components/formulaire-ajout/formulaire-ajout.component';
import { AjoutVoitureComponent } from './components/ajout-voiture/ajout-voiture.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: 
  [
    FormulaireAjoutComponent,
    AjoutVoitureComponent,
  ],
  imports:
   [
    CommonModule,
    ReactiveFormsModule,
    PublicationRoutingModule
  ]
})
export class PublicationModule { }
