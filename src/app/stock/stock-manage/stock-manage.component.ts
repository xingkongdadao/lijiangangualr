import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一支股票', 1.1, 3, '很好', ['IT', '互联网']),
      new Stock(2, '第二支股票', 3.1, 3, '很好', ['IT', '互联网']),
      new Stock(3, '第三支股票', 4.1, 3, '很好', ['IT', '互联网']),
      new Stock(4, '第四支股票', 2.1, 3, '很好', ['IT', '互联网']),
      new Stock(5, '第五支股票', 4.1, 3, '很好', ['IT', '互联网']),
      new Stock(6, '第六支股票', 3.1, 3, '很好', ['IT', '互联网']),
      new Stock(7, '第七支股票', 2.1, 3, '很好', ['IT', '互联网']),
    ];
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
