import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banniere-titre',
  templateUrl: './banniere-titre.component.html',
  styleUrls: ['./banniere-titre.component.scss']
})
export class BanniereTitreComponent implements OnInit {
    
  @Input() titre: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit() {
  }

}
