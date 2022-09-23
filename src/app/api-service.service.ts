import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private _http:HttpClient) { }





  apiUrl ='http://localhost:3000/personnes';

  // Recuperation de tous les donnees

  getAllPersonne():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);

  }

// Enregistrement d'une donnees

  saveUrl = 'http://localhost:3000/personne/Ajout';
  ajoutPersonne(data: any):Observable<any>
  {
    console.log(data,"Savegarder Effectuer")

    return this._http.post(`${this.saveUrl}`,data)
  }

// Suppresseion des donnees

  deleteUrl = 'http://localhost:3000/personne/supprimer';


  supprimerPersonne(id : any):Observable<any>
  {
    let ids=id;

    return this._http.delete(`${this.deleteUrl}/${ids}`);
  }


// Modification des Donnees

modificationUrl = 'http://localhost:3000/personne/modifier';

modificationPersonne(data : any,id : any): Observable<any>
{
  let ids = id;
  return this._http.put(`${this.modificationUrl}/${ids}`,data);
}


//

singleURL='http://localhost:3000/personne';
getSingleData(id:any):Observable<any>
{
  let ids = id;
  return this._http.get(`${this.modificationUrl}/${ids}`);
}

}
