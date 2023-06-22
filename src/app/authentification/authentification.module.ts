import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthentificationRoutingModule } from './authentification-routing.module';



@NgModule({
  declarations:
   [
    LoginComponent,
    InscriptionComponent
  ],
  imports:
   [
    CommonModule,
    AuthentificationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AuthentificationModule { }
