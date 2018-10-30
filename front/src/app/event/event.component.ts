import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import smoothscroll from 'smoothscroll-polyfill/dist/smoothscroll';
smoothscroll.polyfill();

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements  OnInit, OnChanges  {
  
  @Input() event : any;
  texte: string;
  lien : string;
  change = false;
  hover: boolean;
  hover2: boolean;

   constructor(location: Location, private router : Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.texte = "Retour à l'accueil";
        this.lien = '';
        this.change = false;
      } else {
        this.texte = 'Lire plus';
        this.change = true;
      }
    });
  }
  
  ngOnInit() {
  }
  
  ngOnChanges() {
    if (this.change) {
        this.lien = this.event.diminutif;
    }
  }

  scrollPage(hauteur) {
    if (this.lien != '') {
      window.scroll({ top: hauteur, left: 0, behavior: 'smooth' });
    }
  }
  
}

