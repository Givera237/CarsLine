import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {path: 'affiche', loadChildren: () => import('./read-voiture/read-voiture.module').then (m => m.ReadVoitureModule) },
  {path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then (m => m.AuthentificationModule) }, 
  {path: 'publication', loadChildren: () => import('./publication/publication.module').then (m => m.PublicationModule) }, 
  {path: 'filtre', loadChildren: () => import('./filtre-annonce/filtre-annonce.module').then (m => m.FiltreAnnonceModule) }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
