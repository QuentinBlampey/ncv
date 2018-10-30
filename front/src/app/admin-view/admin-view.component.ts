import { Component, OnInit } from '@angular/core';
import { Classements } from '../classements';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  connecte = false;
  code : string;
  nom : string;
  prenom : string;
  sexe : string;
  phase : string;
  event : string;
  rang : number;
  annee : number;
  classements : Classements[];

  constructor() { }

  ngOnInit() {
    this.classements = [];
  }

  changeConnecte() {
    if (this.code=='ncvcvgvt') {
      this.connecte = true;
    }
    else {
      this.connecte = false;
    }
    console.log(this.connecte);
  }

  getFinalistes(classement) {
    if (classement.phase == 'finales') {
        return 'Finaliste'
        }
    else {
        return ''
        }
  }

  entrerBDD() {
    this.classements.push( { "nom" : this.nom , "prenom" : this.prenom , "event" : this.event , "sexe" : this.sexe , "phase" : this.phase , "annee" : this.annee , "rang" : this.rang} );
    console.log(this.classements.length)
  }

}
