import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { apiServer } from '../apiServer';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private http= inject(HttpClient)

  public apiUrl = apiServer.apiYrl;

  constructor() {

   }

   getPersonajes(){
   return  this.http.get(`${this.apiUrl}`);

   }

}
