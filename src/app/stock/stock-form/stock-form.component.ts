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
  stock: Stock = new Stock(0, '', 0, 0, '', []);
  stockId: number;
  formModel: FormGroup;
  categories = ['IT', '互联网', '金融'];

  constructor(private routeInfo: ActivatedRoute,
              private stockService: StockService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    // 创建表单数据
    const fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required]],
        desc: [''],
        categories: fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false),
        ])
      }
    );

    this.stockId = this.routeInfo.snapshot.params['id'];
    this.stockId = Number(this.stockId);

    if (this.stockId !== 0) {
      // console.log(this.stockId);
      // console.log(typeof this.stockId);
      this.stockService.getStockById(this.stockId).subscribe(
        data => {
          this.stock = data;
          this.formModel.reset({
            name: data.name,
            price: data.price,
            desc: data.desc,
            rating: data.rating,
            categories: [
              data.categories.indexOf(this.categories[0]) !== -1,
              data.categories.indexOf(this.categories[1]) !== -1,
              data.categories.indexOf(this.categories[2]) !== -1,
            ]
          });
          console.log(this.stock);
        }
      );
    }


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
    console.log(this.formModel.hasError);
    // console.log(this.stock.rating);
    this.router.navigateByUrl('/stock');
  }
}
