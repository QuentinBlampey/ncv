import { Component, OnInit } from '@angular/core';
import { eventService } from '../eventService/event.service'

@Component({
  selector: 'app-vt-view',
  templateUrl: './vt-view.component.html',
  styleUrls: ['./vt-view.component.scss']
})
export class VtViewComponent implements OnInit {
  vt : any;
  fond : string;
  constructor(private evenementService : eventService) { }

  ngOnInit() {
    this.vt = this.evenementService.vt
    this.fond = 'rgb(39,45,57)';
  }

}
