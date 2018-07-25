import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGood, IGoodInStore } from '../goods';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  @Output() addToCardEvent = new EventEmitter<IGoodInStore>();

  @Input() good: IGood;
  public descriptionIsShow = false;

  constructor() { }

  addGood(amount: string): void {
    this.addToCardEvent.emit({
      title: this.good.title,
      amount: parseInt(amount)
    });
  }

  ngOnInit() {
  }

}
