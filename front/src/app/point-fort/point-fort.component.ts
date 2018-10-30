import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point-fort',
  templateUrl: './point-fort.component.html',
  styleUrls: ['./point-fort.component.scss']
})
export class PointFortComponent implements OnInit {
  
  @Input() contenu : any;
  @Input() inverse : any;
  @Input() fond : any;
  
  constructor() { }

  ngOnInit() {
  }

}
