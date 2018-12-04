import {Component, OnInit} from '@angular/core';
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

  zimufayin: string;

  constructor() {
  }

  ngOnInit() {
    this.playAudio();
  }

  toggleFlip() {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
    this.playAudio();
  }

  playAudio() {
    const audio = new Audio();
    this.zimufayin = '../assets/zimufayin/1/ao.mp3';

    audio.src = this.zimufayin;
    audio.load();
    audio.play();

  }
}
