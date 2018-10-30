import { Component, OnInit } from '@angular/core';
import { eventService } from '../eventService/event.service';

@Component({
  selector: 'app-ncv-view',
  templateUrl: './ncv-view.component.html',
  styleUrls: ['./ncv-view.component.scss']
})
export class NcvViewComponent implements OnInit {
  ncv : any; 
  fond : string;
  constructor(private evenementService : eventService) { }


  ngOnInit() {
    this.ncv = this.evenementService.ncv;
    this.fond = 'rgb(39,45,57)';
  }

  scrollClasse(nom) {
    document.querySelector('.'+nom).scrollIntoView({ behavior: 'smooth' });
  }
}