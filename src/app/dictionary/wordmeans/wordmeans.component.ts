import {Component, OnInit} from '@angular/core';
import {WordMean, WordmeansService} from '../wordmeans.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-wordmeans',
  templateUrl: './wordmeans.component.html',
  styleUrls: ['./wordmeans.component.css']
})
export class WordmeansComponent implements OnInit {

  private word_means: Observable<WordMean[]>;
  constructor(public WordMeansService: WordmeansService) {
    // console.log(this.WordMeansService.getWordMeans());
  }

  ngOnInit() {
    this.word_means = this.WordMeansService.getWordMeans();

  }

  create() {
  }

  update(word_mean: WordMean) {
  }


}
