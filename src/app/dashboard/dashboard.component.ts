import { Component, OnInit } from '@angular/core';
import {flipStae_animation} from '../animations/flipState.anim';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    flipStae_animation
  ]
})
export class DashboardComponent implements OnInit {
  flip = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  toggleFlip() {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
  }
}
