import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { IAppState } from '../appState';
import { ThrowDice, ToggleDiceSelection } from '../store/app.actions';
import { Dice } from '../store/app.model';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {
  @Select((state: IAppState) => state.app.dice)
  dice$: Dice[];

  @Select((state: IAppState) => state.app.numberOfThrowsLeft)
  numberOfThrowsLeft$: number;

  constructor(private store: Store) {}

  ngOnInit() {}

  throw() {
    this.store.dispatch(new ThrowDice());
  }

  toggleDiceAtIndex(diceIndex: number) {
    this.store.dispatch(new ToggleDiceSelection(diceIndex));
  }

  counter(i: number) {
    return new Array(i);
  }
}
