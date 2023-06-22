import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Site } from '../models/site';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class SitesServices 
  {
    constructor(private http: HttpClient) {}

    site : Site[] =[] ;
/*
    getAllsites() : Observable<Site[]>
    {
      return this
    }
*/
  }