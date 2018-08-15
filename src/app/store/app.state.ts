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

  static bonusValue(state: AppStateModel) {
    return AppState.sum1(state) >= 63 ? 50 : 0;
  }

  static sum2(state: AppStateModel) {
    return state.spots
      .filter((_, index) => index >= 6)
      .map(spot => spot.value)
      .reduce((acc, cur) => acc + cur);
  }

  @Selector()
  static bonus(state: AppStateModel) {
    const numberOfTakenAtTop = state.spots
      .filter((_, index) => index < 6)
      .map(spot => (spot.taken ? 1 : 0))
      .reduce((acc, cur) => acc + cur, 0);

    return numberOfTakenAtTop >= 6 ? AppState.bonusValue(state) : null;
  }

  @Selector()
  static upperSum(state: AppStateModel) {
    return AppState.sum1(state) + AppState.bonus(state);
  }

  @Selector()
  static totalSum(state: AppStateModel) {
    return (
      AppState.sum1(state) + AppState.bonusValue(state) + AppState.sum2(state)
    );
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
    const diceValues = dice.map(x => x.value);

    return spots == null
      ? spots
      : [
          {
            ...spots[0],
            possibleValue: this.best(diceValues, 1),
          },
          {
            ...spots[1],
            possibleValue: this.best(diceValues, 2),
          },
          {
            ...spots[2],
            possibleValue: this.best(diceValues, 3),
          },
          {
            ...spots[3],
            possibleValue: this.best(diceValues, 4),
          },
          {
            ...spots[4],
            possibleValue: this.best(diceValues, 5),
          },
          {
            ...spots[5],
            possibleValue: this.best(diceValues, 6),
          },
          {
            ...spots[6],
            possibleValue: this.bestOnePair(diceValues),
          },
          {
            ...spots[7],
            possibleValue: this.bestTwoPairs(diceValues),
          },
          {
            ...spots[8],
            possibleValue: this.bestThreeSame(diceValues),
          },
          {
            ...spots[9],
            possibleValue: this.bestFourSame(diceValues),
          },
          {
            ...spots[10],
            possibleValue: this.smallStraight(diceValues),
          },
          {
            ...spots[11],
            possibleValue: this.bigStraight(diceValues),
          },
          {
            ...spots[12],
            possibleValue: this.kak(diceValues),
          },
          {
            ...spots[13],
            possibleValue: this.chance(diceValues),
          },
          {
            ...spots[14],
            possibleValue: this.yatzy(diceValues),
          },
        ];
  }

  diceCounts(diceValues: number[]) {
    return [6, 5, 4, 3, 2, 1].map(x => ({
      dice: x,
      count: diceValues.filter(s => s === x).length,
    }));
  }

  best(diceValues: number[], no: number) {
    return diceValues.reduce((acc, cur) => (cur === no ? acc + cur : acc), 0);
  }

  bestOnePair(diceValues: number[]) {
    return this.diceCounts(diceValues).reduce(
      (acc, cur) => (cur.count >= 2 && cur.dice * 2 > acc ? cur.dice * 2 : acc),
      0
    );
  }

  bestTwoPairs(diceValues: number[]) {
    const twoPairs = this.diceCounts(diceValues).reduce(
      (acc, cur) => {
        const newPairs = {
          highestPair: acc.highestPair,
          nextHighestPair: acc.nextHighestPair,
        };

        if (cur.count >= 4) {
          if (cur.dice * 2 > acc.highestPair) {
            newPairs.highestPair = cur.dice * 2;
          }
          if (cur.dice * 2 > acc.nextHighestPair) {
            newPairs.nextHighestPair = cur.dice * 2;
          }
        } else if (cur.count >= 2) {
          if (cur.dice * 2 > acc.highestPair) {
            newPairs.highestPair = cur.dice * 2;
          } else if (cur.dice * 2 > acc.nextHighestPair) {
            newPairs.nextHighestPair = cur.dice * 2;
          }
        }

        return newPairs;
      },
      { highestPair: 0, nextHighestPair: 0 }
    );

    return twoPairs.highestPair > 0 && twoPairs.nextHighestPair > 0
      ? twoPairs.highestPair + twoPairs.nextHighestPair
      : 0;
  }

  bestThreeSame(diceValues: number[]) {
    return this.diceCounts(diceValues).reduce(
      (acc, cur) => (cur.count >= 3 && cur.dice * 3 > acc ? cur.dice * 3 : acc),
      0
    );
  }

  bestFourSame(diceValues: number[]) {
    return this.diceCounts(diceValues).reduce(
      (acc, cur) => (cur.count >= 4 && cur.dice * 4 > acc ? cur.dice * 4 : acc),
      0
    );
  }

  smallStraight(diceValues: number[]) {
    return diceValues.some(x => x === 1) &&
      diceValues.some(x => x === 2) &&
      diceValues.some(x => x === 3) &&
      diceValues.some(x => x === 4) &&
      diceValues.some(x => x === 5)
      ? 15
      : 0;
  }

  bigStraight(diceValues: number[]) {
    return diceValues.some(x => x === 2) &&
      diceValues.some(x => x === 3) &&
      diceValues.some(x => x === 4) &&
      diceValues.some(x => x === 5) &&
      diceValues.some(x => x === 6)
      ? 20
      : 0;
  }

  kak(diceValues: number[]) {
    const kakPairs = this.diceCounts(diceValues).reduce(
      (acc, cur) => {
        if (cur.count >= 3) {
          return {
            highestTreeSame: cur.dice * 3,
            highestTwoSame: acc.highestTwoSame,
          };
        }

        if (cur.count >= 2) {
          return cur.dice * 2 > acc.highestTwoSame
            ? {
                highestTreeSame: acc.highestTreeSame,
                highestTwoSame: cur.dice * 2,
              }
            : acc;
        }

        return acc;
      },
      { highestTreeSame: 0, highestTwoSame: 0 }
    );

    return kakPairs.highestTreeSame > 0 && kakPairs.highestTwoSame > 0
      ? kakPairs.highestTreeSame + kakPairs.highestTwoSame
      : 0;
  }

  chance(diceValues: number[]) {
    return diceValues.reduce((acc, cur) => cur + acc, 0);
  }

  yatzy(diceValues: number[]) {
    return this.diceCounts(diceValues).reduce(
      (acc, cur) => (cur.count === 5 ? 50 : acc),
      0
    );
  }
}
