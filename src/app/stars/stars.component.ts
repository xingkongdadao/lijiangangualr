import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];
  @Input()
  read_only = true;

  constructor() {
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }

    // this.stars = [false, false, false, true, true];
  }

  clickStar(index: number) {
    if (!this.read_only) {
      this.rating = index + 1;
      this.stars = [];
      for (let i = 1; i <= 5; i++) {
        this.stars.push(i > this.rating);
      }

      this.ratingChange.emit(this.rating);

    }
  }
}
