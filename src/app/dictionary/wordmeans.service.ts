import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordmeansService {
  private readonly URL = 'http://127.0.0.1:8000/3418fe84-fcfd-45f0-add2-e332c9ba63cd/v1/word_means';

  constructor(public httpClient: HttpClient) {
  }

  getWordMeans(): Observable<WordMean[]> {
    return this.httpClient.get<Array<WordMean>>(`${this.URL}`);
  }
  getWordMeanById(id: number): Observable<WordMean> {
    return this.httpClient.get<WordMean>(`${this.URL}/${id}`);
  }

}

export class WordMean {
  constructor(
    public id: string,
    public mean: string,
    public ghi_chu: string,
    public creat_time: string,
    public edite_time: string,
    public loai_word_means: string,
    public word_property: string,
    public word: string,
    public edit_by: string,


    // public categories: Array<string>
  ) {

  }
}

