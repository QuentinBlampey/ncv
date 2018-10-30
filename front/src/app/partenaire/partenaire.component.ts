import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  
  @Input() contenu : any;
  
  constructor() { }

  ngOnInit() {
  }

}
