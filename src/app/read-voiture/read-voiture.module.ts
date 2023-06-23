import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficheVoitureComponent } from './components/affiche-voiture/affiche-voiture.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { ReadVoitureRoutingModule } from './read-voiture-routing.module';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    AccueilComponent,
    AfficheVoitureComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReadVoitureRoutingModule

  ],
  exports: []
})
export class ReadVoitureModule { }
