import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dice } from '../store/app.model';

@Component({
  selector: 'app-single-dice',
  templateUrl: './single-dice.component.html',
  styleUrls: ['./single-dice.component.scss'],
})
export class SingleDiceComponent implements OnInit {
  @Input()
  dice: Dice;

  @Output()
  click = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  _click() {
    this.click.emit();
  }
}
