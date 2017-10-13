import {Component, ElementRef, OnInit} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

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
    // 手风琴效果
    // this._addAccordion(index);
  }

  _addAccordion(index) {
    if (this.open[index]) {
      for (let i = 0; i < this.open.length; i++) {
        if (i == index) continue;
        this.open[i] = false;
      }
    }
  }

}
