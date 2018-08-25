import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ShowToplist, DismissModal } from './store/app.actions';
import { Observable } from 'rxjs';
import { IAppState } from './appState';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'yatzy';

  @Select((state: IAppState) => state.app.showingToplist)
  showingToplist$: Observable<boolean>;

  constructor(private store: Store) {}

  showToplist() {
    this.store.dispatch(new ShowToplist());
  }

  dismissModal() {
    this.store.dispatch(new DismissModal());
  }
}
