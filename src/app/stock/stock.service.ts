import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private readonly URL = '/api/stock';
  constructor(public httpClient: HttpClient) {
  }

  // private stocks: Stock[] = [
  //   new Stock(1, '第一支股票', 1.1, 3, '很好', ['IT', '互联网']),
  //   new Stock(2, '第二支股票', 3.1, 5, '很好', ['IT', '互联网']),
  //   new Stock(3, '第三支股票', 4.1, 4, '很好', ['IT', '互联网']),
  //   new Stock(4, '第四支股票', 2.1, 1, '很好', ['IT', '互联网']),
  //   new Stock(5, '第五支股票', 4.1, 2, '很好', ['IT', '互联网', '金融']),
  //   new Stock(6, '第六支股票', 3.1, 3, '很好', ['IT', '互联网']),
  //   new Stock(7, '第七支股票', 2.1, 4, '很好', ['IT', '互联网']),
  // ];

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

