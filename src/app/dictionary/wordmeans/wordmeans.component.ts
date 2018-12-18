import {Component, OnInit} from '@angular/core';
import {WordMeans, WordmeansService} from '../wordmeans.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-wordmeans',
  templateUrl: './wordmeans.component.html',
  styleUrls: ['./wordmeans.component.css']
})
export class WordmeansComponent implements OnInit {

  public word_means: WordMeans[];
  constructor(public WordMeansService: WordmeansService) {
    // console.log(this.WordMeansService.getWordMeans());
  }

  ngOnInit() {
    // this.word_means = this.WordMeansService.getWordMeans();
    this.WordMeansService.getWordMeans()
      .subscribe(data => {
        console.log(data['results']);
        this.word_means = data['results'];
      });
  }

  create() {
  }

  update(word_mean: WordMeans) {
  }


}
