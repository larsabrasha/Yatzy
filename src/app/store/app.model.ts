export class AppStateModel {
    ones: number;
    twos: number;
    threes: number;
    fours: number;
    fives: number;
    sixes: number;

    onePair: number;
    twoPairs: number;
    threeSame: number;
    fourSame: number;
    smallStraight: number;
    bigStaight: number;
    kak: number;
    chance: number;
    yatzy: number;
}

export const defaults: AppStateModel = {
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,

    onePair: null,
    twoPairs: null,
    threeSame: null,
    fourSame: null,
    smallStraight: null,
    bigStaight: null,
    kak: null,
    chance: null,
    yatzy: null,
}