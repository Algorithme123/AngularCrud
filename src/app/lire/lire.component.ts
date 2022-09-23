import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-lire',
  templateUrl: './lire.component.html',
  styleUrls: ['./lire.component.css']
})
export class LireComponent implements OnInit {

  constructor( private apiServiceService:ApiServiceService) { }

  lectureDesDonnees : any;

  messageSuccess : any;

  ngOnInit(): void {

    this.getAllData();
  }

  // Recuperation de tous les donnees
  getAllData(){

    this.apiServiceService.getAllPersonne().subscribe((response)=>{
      console.log(response,"response==>");

      this.lectureDesDonnees =response.data;
  })

  }

  // recuperation d'id a supprimer

  supprimerId(id:any){

    console.log(id,'Suppression de ces Donnees = >');
    this.apiServiceService.supprimerPersonne(id).subscribe((response)=>{
      console.log(response, "Supprimer Aves Succes");
      this.messageSuccess=response.message;

      this.getAllData();


    })

  }

}
