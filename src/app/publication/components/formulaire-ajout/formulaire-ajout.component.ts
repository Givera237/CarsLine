import { Component , OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Annonce } from '../../models/annonce';
import { HttpClient, HttpResponse  } from '@angular/common/http';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.scss']
})
export class FormulaireAjoutComponent 
{
  annonceForm!: FormGroup;
  voitureForm!: FormGroup;
  sitePreview$!: Observable<Annonce>;
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

this.annonceForm = this.formBuilder.group
(
  {
    titre: [null],
    description: [null],
    adresse: [null],
    prix: [null],
    kilometrage: [null],
  }
);
this.sitePreview$ = this.annonceForm.valueChanges.pipe(
map(formValue =>({
 ...formValue,
 createDate: new Date()
 
}))
);

}   

onSubmitForm() 
  {
    
    const obj = this.annonceForm.value;
    const obje = JSON.stringify(obj);
    console.log(obje);
    const id = environment.id_utilisateur;
    this.http.post(`http://localhost:3000/api/annonce/${id}`, obj, { observe: 'response' }).subscribe
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


}
