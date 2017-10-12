import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  open = [true, true, true, true];

  constructor() {
  }

  ngOnInit() {
  }

  _toggleMenu(index) {
    this.open[index] = !this.open[index];
  }

}
