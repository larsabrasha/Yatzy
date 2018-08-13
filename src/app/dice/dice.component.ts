import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { IAppState } from '../appState';
import { ThrowDice, ToggleDiceSelection } from '../store/app.actions';
import { Dice } from '../store/app.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {
  @Select((state: IAppState) => state.app.dice)
  dice$: Observable<Dice[]>;

  @Select((state: IAppState) => state.app.numberOfThrowsLeft)
  numberOfThrowsLeft$: Observable<number>;

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
