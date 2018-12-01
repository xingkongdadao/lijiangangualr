import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  stockId: number;
  formModel: FormGroup;
  categories = ['IT', '互联网', '金融'];

  constructor(private routeInfo: ActivatedRoute,
              private stockService: StockService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.stockId = this.routeInfo.snapshot.params['id'];
    this.stockId = Number(this.stockId);
    console.log(this.stockId);
    console.log(typeof this.stockId);
    this.stock = this.stockService.getStockById(this.stockId);
    console.log(this.stock);

    // 创建表单数据
    const fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
        price: [this.stock.price, [Validators.required]],
        desc: [this.stock.desc],
        categories: fb.array([
          new FormControl(this.stock.categories.indexOf(this.categories[0]) !== -1),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) !== -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) !== -1),

        ])


      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    const chineseCategories = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        chineseCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.categories = chineseCategories;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
    // console.log(this.stock.rating);
    // this.router.navigateByUrl('/stock');
  }
}
