import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private readonly URL = '/api/stock';
  // private readonly URL = 'http://127.0.0.1:8000/3418fe84-fcfd-45f0-add2-e332c9ba63cd/v1/word_means';
  constructor(public httpClient: HttpClient) {
  }

  getStocks(): Observable<Stock[]> {
    return this.httpClient.get<Array<Stock>>(`${this.URL}`);
  }
  getStockById(id: number): Observable<Stock> {
    return this.httpClient.get<Stock>(`${this.URL}/${id}`);
  }
}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

