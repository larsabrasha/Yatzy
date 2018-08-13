export class Dice {
  value: number;
  selected: boolean;
}

export class Spot {
  value: number;
  possibleValue: number;
  taken: boolean;
}

export class AppStateModel {
  spots: Spot[];

  dice: Dice[];

  numberOfThrowsLeft: number;
  showingPossibleValues: boolean;
}

export const diceDefaultValues = [
  {
    value: null,
    selected: false,
  },
  {
    value: null,
    selected: false,
  },
  {
    value: null,
    selected: false,
  },
  {
    value: null,
    selected: false,
  },
  {
    value: null,
    selected: false,
  },
];

export const defaults: AppStateModel = {
  spots: Array.from({ length: 16 }, x => ({
    value: null,
    possibleValue: null,
    taken: false,
  })),

  dice: diceDefaultValues,

  numberOfThrowsLeft: 3,
  showingPossibleValues: false,
};
