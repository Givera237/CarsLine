import { Component, OnInit } from '@angular/core';
import { AfficheVoitureService } from '../../services/affiche-voiture.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../../models/annonce';
import { Voiture } from '../../models/voiture';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Image } from '../../models/image';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

annonce!:Observable<Annonce>;
annonces!:Annonce[] ;
voitures!:Observable<Voiture[]>;
TabVoitures!: Voiture[];
images!:Observable<Image[]>;
Tab!:Image[];
 AnnonceId = +this.id.snapshot.params['id'];
 
 
constructor(private service : AfficheVoitureService,
            private http : HttpClient,
            private route : Router,
            private id : ActivatedRoute){}

  ngOnInit(): void {

    
 /*   
    this.voitures=this.service.getVoitures();

    this.voitures.subscribe
    (
      data =>
      {
        this.TabVoitures = data;
        console.log(data);
      }
    );

      this.images=this.service.getAllImage();

      this.images.subscribe
      (
        reponse =>
        {
          this.Tab = reponse;
          console.log(this.Tab);
        }
      ); 

      this.annonce = this.service.getAnnonceById(this.AnnonceId);

    this.annonce.subscribe
    (
      res =>
      {
        this.annonces=res;
        console.log(res);
      }
  );
*/

this.annonce = this.service.getAnnonceById(this.AnnonceId);

this.annonce.subscribe
(
  res =>
  {
    //this.annonces=res;
    this.annonces.push(res)
    console.log(this.annonces);
  }
);
  
  }

Delete()
{
  this.http.delete(`http://localhost:3000/api/annonce/supprimer/${this.AnnonceId}`);
}

}
