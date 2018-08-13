import { Dice } from './app.model';

export class SelectOnes {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectTwos {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectThrees {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectFours {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectFives {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectSixes {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectOnePair {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectTwoPairs {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectThreeSame {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectFourSame {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectSmallStraight {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectBigStraight {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectKak {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectChance {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class SelectYatzy {
  static readonly type = '[App] Select Ones';
  constructor(public payload: number) {}
}

export class ToggleDiceSelection {
  static readonly type = '[App] Toggle Dice Selection';
  constructor(public diceIndex: number) {}
}

export class ThrowDice {
  static readonly type = '[App] Throw Dice';
}
