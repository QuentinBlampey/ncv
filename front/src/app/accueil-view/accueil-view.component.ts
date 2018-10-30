import { Component, OnInit } from '@angular/core';
import { eventService } from '../eventService/event.service'

@Component({
  selector: 'app-accueil-view',
  templateUrl: './accueil-view.component.html',
  styleUrls: ['./accueil-view.component.scss']
})
export class AccueilViewComponent implements OnInit {
  ncv : any;   
  cvg : any;
  vt : any;
  constructor(private evenementService : eventService) { }

  ngOnInit() {
    this.ncv = this.evenementService.ncv;
    this.cvg = this.evenementService.cvg;
    this.vt = this.evenementService.vt
  }
}
