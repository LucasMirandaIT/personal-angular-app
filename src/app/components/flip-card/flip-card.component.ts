import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input() title;
  @Input() imgSrc;
  @Input() description;
  @Input() date;
  @Input() url;

  constructor() { }

  ngOnInit() {
  }

  goToNews() {
    let elem = document.getElementsByClassName('flip-card-back');
    elem[0].classList.add('clickable');
    window.open(this.url, '_blank');    
  }

}
