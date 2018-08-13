import { Action, State, StateContext, Selector } from '@ngxs/store';
import { ThrowDice, ToggleDiceSelection, SelectSpot } from './app.actions';
import {
  AppStateModel,
  defaults,
  Dice,
  Spot,
  diceDefaultValues,
} from './app.model';

@State<AppStateModel>({
  name: 'app',
  defaults,
})
export class AppState {
  static sum1(state: AppStateModel) {
    return state.spots
      .filter((_, index) => index < 6)
      .map(spot => spot.value)
      .reduce((acc, cur) => acc + cur);
  }

  @Selector()
  static upperSum(state: AppStateModel) {
    return AppState.sum1(state) + AppState.bonus(state);
  }

  @Selector()
  static bonus(state: AppStateModel) {
    const numberOfTakenAtTop = state.spots
      .filter((_, index) => index < 6)
      .map(spot => (spot.taken ? 1 : 0))
      .reduce((acc, cur) => acc + cur, 0);

    return numberOfTakenAtTop >= 6
      ? AppState.sum1(state) >= 63
        ? 50
        : 0
      : null;
  }

  @Action(ThrowDice)
  throw(context: StateContext<AppStateModel>) {
    const state = context.getState();

    const newDice = state.dice.map(
      d =>
        d.selected
          ? d
          : {
              value: this.getRandomDiceValue(),
              selected: d.selected,
            }
    );

    context.patchState({
      dice: newDice,
      numberOfThrowsLeft:
        state.numberOfThrowsLeft > 0 ? state.numberOfThrowsLeft - 1 : 0,
      spots: this.newSpotsForDice(state.spots, newDice),
      showingPossibleValues: true,
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

  @Action(SelectSpot)
  selectSpot(context: StateContext<AppStateModel>, action: SelectSpot) {
    const state = context.getState();
    const newSpots = [...state.spots];
    const selectedSpot = state.spots[action.spotIndex];

    newSpots[action.spotIndex] = {
      ...selectedSpot,
      taken: true,
      value: selectedSpot.possibleValue,
    };

    context.patchState({
      spots: newSpots,
      numberOfThrowsLeft: 3,
      dice: diceDefaultValues,
      showingPossibleValues: false,
    });
  }

  getRandomDiceValue() {
    return this.getRandomInt(1, 6);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  newSpotsForDice(spots: Spot[], dice: Dice[]) {
    return spots == null
      ? spots
      : [
          {
            ...spots[0],
            possibleValue: this.possibleValueForNumber(dice, 1),
          },
          {
            ...spots[1],
            possibleValue: this.possibleValueForNumber(dice, 2),
          },
          {
            ...spots[2],
            possibleValue: this.possibleValueForNumber(dice, 3),
          },
          {
            ...spots[3],
            possibleValue: this.possibleValueForNumber(dice, 4),
          },
          {
            ...spots[4],
            possibleValue: this.possibleValueForNumber(dice, 5),
          },
          {
            ...spots[5],
            possibleValue: this.possibleValueForNumber(dice, 6),
          },
        ];
  }

  possibleValueForNumber(dice: Dice[], no: number) {
    return dice
      .map(d => d.value)
      .reduce((acc, cur) => (cur === no ? acc + cur : acc), 0);
  }
}
