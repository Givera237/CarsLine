import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltreAnnonceRoutingModule } from './filtre-annonce-routing.module';
import { FiltreComponent } from './components/filtre/filtre.component';



@NgModule({
  declarations:
   [
    FiltreComponent
   ],
  imports: 
  [
    CommonModule,
    FiltreAnnonceRoutingModule
  ]
})
export class FiltreAnnonceModule { }
