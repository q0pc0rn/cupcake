import { Component } from '@angular/core';

import { IGood, IGoodInStore } from './goods';
import { GoodsService } from './goods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show: false;
  title = 'cupcake-app';
  goodsList: IGood[];
  storedGoods: IGoodInStore[] = [];
  constructor(private goodService: GoodsService) {
    this.goodsList = this.goodService.goodsList;
  }

  onAddToCard(good: IGoodInStore): any {
    const existGoodIndex = this.storedGoods.findIndex(x => x.title === good.title);
    if (existGoodIndex === -1) {
      this.storedGoods = [...this.storedGoods, good];
    } else {
      this.storedGoods[existGoodIndex].amount += good.amount;
    }
  }
}
