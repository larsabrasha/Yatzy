import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { IAppState } from '../appState';
import { Observable } from 'rxjs';
import { Spot } from '../store/app.model';
import { SelectSpot } from '../store/app.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
})
export class ScoreBoardComponent implements OnInit {
  @Select((state: IAppState) => state.app.spots)
  spots$: Observable<Spot>;

  @Select((state: IAppState) => state.app.showingPossibleValues)
  showingPossibleValues$: Observable<boolean>;

  @Select(AppState.bonus)
  bonus$: Observable<number>;

  @Select(AppState.upperSum)
  upperSum$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {}

  selectSpot(spotIndex: number) {
    this.store.dispatch(new SelectSpot(spotIndex));
  }
}
