import { Component, OnInit } from '@angular/core';
import { eventService } from '../eventService/event.service'

@Component({
  selector: 'app-cvg-view',
  templateUrl: './cvg-view.component.html',
  styleUrls: ['./cvg-view.component.scss']
})
export class CvgViewComponent implements OnInit {   
  cvg : any;
  fond : string;
  constructor(private evenementService : eventService) { }

  ngOnInit() {
    this.cvg = this.evenementService.cvg;
    this.fond = 'rgb(39,45,57)';
  }

}
