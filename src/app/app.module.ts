import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CommonModule, registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { AfficheVoitureService } from './read-voiture/services/affiche-voiture.service';
import { HttpStatusInterceptor } from './interceptors/auth.interceptors';

registerLocaleData(localeFr,'fr');


@NgModule({
  declarations: 
  [
    AppComponent,    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: 
  [
    AfficheVoitureService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpStatusInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
