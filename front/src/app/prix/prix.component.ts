import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.scss']
})
export class PrixComponent implements OnInit {
  
  @Input() prix : any;
  @Input() offres : any;
  @Input() logos : any;
  
  constructor() { }

  ngOnInit() {
  }

}
