import { Component, OnInit } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill/dist/smoothscroll';
smoothscroll.polyfill();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  scrollPageTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
