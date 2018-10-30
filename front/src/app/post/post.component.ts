import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() contenu : any;
  
  constructor() { }

  ngOnInit() {
    // let slides = document.getElementByClassName("premiere");
    // let dots = document.getElementsByClassName("dot");
    
    // for (var slide in slides) {
    //     slide.style.display = "block"; 
    // }
    // dots[0].className += " active";
  }

}
