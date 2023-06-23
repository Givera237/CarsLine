import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { Router } from '@angular/router';
import { AfficheVoitureService } from '../../services/affiche-voiture.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-affiche-voiture',
  templateUrl: './affiche-voiture.component.html',
  styleUrls: ['./affiche-voiture.component.scss']
})
export class AfficheVoitureComponent implements OnInit {

annonces! : Observable<Annonce[]>;
TabAnnonces!: Annonce[];
  
constructor(private router : Router,
            private service : AfficheVoitureService){

}

ngOnInit(): void {
    
  this.annonces = this.service.getAnnoces();
  this.annonces.subscribe(data =>
    {
      this.TabAnnonces = data;
      console.log(data);
    })
}
/*annonces :Annonce[] =[
{ 
    id_annonce:1,
    id_voiture:1,
    description:'tres bonne voiture',
    date_annonce:'10-12-2003',
    prix:100000,
    couleur:'rouge',
    kilometrage: '100 km',
    imageUrl :'5.jpg'
},
{
  id_annonce:2,
  id_voiture:2,
  description:'tres bonne voiture',
  date_annonce:'10-12-2003',
  prix:100000,
  couleur:'rouge',
  kilometrage: '100 km',
  imageUrl :'6.jpg'
}
]
*/
onViewSite(id_post : number) : void
{
 this.router.navigateByUrl(`affiche/${id_post}`);
}

}
