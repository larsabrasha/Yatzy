import { Action, State, StateContext } from '@ngxs/store';
import { ThrowDice, ToggleDiceSelection } from './app.actions';
import { AppStateModel, defaults, Dice } from './app.model';

@State<AppStateModel>({
  name: 'app',
  defaults,
})
export class AppState {
  @Action(ThrowDice)
  throw(context: StateContext<AppStateModel>) {
    const state = context.getState();

    context.patchState({
      dice: state.dice.map(
        d =>
          d.selected
            ? d
            : {
                value: this.getRandomDiceValue(),
                selected: d.selected,
              }
      ),
      numberOfThrowsLeft:
        state.numberOfThrowsLeft > 0 ? state.numberOfThrowsLeft - 1 : 0,
    });
  }

  @Action(ToggleDiceSelection)
  toggleDiceSelection(
    context: StateContext<AppStateModel>,
    action: ToggleDiceSelection
  ) {
    const state = context.getState();

    context.patchState({
      dice: state.dice.map(
        (d, index) =>
          index === action.diceIndex
            ? {
                value: d.value,
                selected: !d.selected,
              }
            : d
      ),
    });
  }

  getRandomDiceValue() {
    return this.getRandomInt(1, 6);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
