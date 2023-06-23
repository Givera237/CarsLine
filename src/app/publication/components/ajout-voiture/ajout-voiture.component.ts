import { Component , OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Annonce } from '../../models/annonce';
import { HttpClient, HttpResponse  } from '@angular/common/http';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Voiture } from '../../models/voiture';

@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.scss']
})
export class AjoutVoitureComponent 
{
  voitureForm!: FormGroup;
  voiturePreview$!: Observable<Voiture>;
  imagesInput!: any;
  fichiers!: Array<File>;
  formData!: FormData; 
  file = new FormData();

  types = ['electrique', 'hybride', 'diesel', 'super', 'petrole', 'charbon'];

  constructor(private formBuilder:FormBuilder,
    private http : HttpClient,
    private router : Router)
     { }

     ngOnInit(): void 
{

this.fichiers = [];

this.voitureForm = this.formBuilder.group
(
  {
    marque: [null],
    couleur: [null],
    modele: [null],
    categorie: [null],
    nb_place: [null],
    transmission: [null],
    anneeF: [null],
    energie: [null],
    capacite: [null], 
  }
);
this.voiturePreview$ = this.voitureForm.valueChanges.pipe(
map(formValue =>({
 ...formValue,
 createDate: new Date()
 
}))
);

} 

onSubmitForm() 
  {
    
    const obj = this.voitureForm.value;
    const obje = JSON.stringify(obj);
    console.log(obje);
    const id = environment.id_utilisateur;
    this.http.post(`http://localhost:3000/api/voiture`, obj, { observe: 'response' }).subscribe
    (
      (response: HttpResponse<any>) => 
      {
        if (response.status === 200) 
        {
          console.log(response.statusText)
          console.log('Post bien envoyé')
        }
        else 
        {
          console.log('merde combi');
        }
      },
      error => 
      {
        console.error(error); // Afficher l'erreur à l'utilisateur
      }
    )
  }

  getFile(event : any)
  {

   const files = event.target.files;
     
     if (files.length > 0) 
     {
 
       for (let i = 0; i < files.length; i++) 
       {
         this.file.append('file', files[i]);
         
       }
     }
     console.log(this.file);
 
  }

  submitData() 
  {
   this.http.post(`http://localhost:3000/api/upload`, this.file, { observe: 'response' }).subscribe
   (
     (response: HttpResponse<any>) => 
     {
       if (response.status === 200) 
       {
         console.log(response.statusText)
         console.log('Post bien envoyé')
       }
       else 
       {
         console.log('merde combi');
       }
     },
     error => 
     {
       console.error(error); // Afficher l'erreur à l'utilisateur
     }
   )
 
 }

 onConnect() : void
 {
   this.router.navigateByUrl(`publication/ajout`);
 }

}


