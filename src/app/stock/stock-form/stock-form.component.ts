import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  stockId: number;

  constructor(private routeInfo: ActivatedRoute,
              private stockService: StockService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    const defaultValue = 0;
    this.stockId = this.routeInfo.snapshot.params['id'];
    this.stockId = Number(this.stockId);
    console.log(this.stockId);
    console.log(typeof this.stockId);
    this.stock = this.stockService.getStockById(this.stockId);
    console.log(this.stock);

  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    console.log(this.stock.rating);
    this.router.navigateByUrl('/stock');
  }
}
