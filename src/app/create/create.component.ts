import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private apiServiceService : ApiServiceService,
              private router:ActivatedRoute) { }

  errorMessage :  any;

  successMessage : any;

  getParamid : any;


  ngOnInit(): void {
    // console.log(this.router.snapshot.paramMap.get('id'),'getid');
    this.getParamid =  this.router.snapshot.paramMap.get('id');

    if (this.getParamid) {

        this.apiServiceService.getSingleData(this.getParamid).subscribe((response)=>{

          console.log(response,'Les resultat ==> ');
          this.formulaireAjoutPersonne.patchValue({
            nom:response.data[0].nom,
            prenom:response.data[0].prenom,
            age:response.data[0].age,
            email:response.data[0].email,
          });


        });

    }




  }

  formulaireAjoutPersonne = new FormGroup({

    'nom':new FormControl('',Validators.required),
    'prenom':new FormControl('',Validators.required),
    'age':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),

  });

  enregisterPersonne(){

    // console.log(this.formulaireAjoutPersonne.value);

      if(this.formulaireAjoutPersonne.valid){

          console.log(this.formulaireAjoutPersonne.value);
          this.apiServiceService.ajoutPersonne(this.formulaireAjoutPersonne.value).subscribe((response)=>{
            console.log(response, "les reponse ==>");
            this.formulaireAjoutPersonne.reset();

            this.successMessage = response.message;
          })

      }else{

        // console.log("Tous les champs sont obligatoires")
        this.errorMessage = "Tous les champs sont obligatoire";
      }

  }

misAjourPersonne(){
  console.log(this.formulaireAjoutPersonne.value,'formulaire mis  A jour')

  if(this.formulaireAjoutPersonne.valid){

    this.apiServiceService.modificationPersonne(this.formulaireAjoutPersonne.value,this.getParamid).subscribe((response)=>{
      console.log(response,'donnees mis a jour ');
      this.successMessage = response.message;
    });
  }else{
    this.errorMessage="tous les champs sont obligatoire";
  }

}

}
