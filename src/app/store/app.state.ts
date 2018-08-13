import { State } from '@ngxs/store';
import { defaults, AppStateModel } from './app.model';

@State<AppStateModel>({
  name: 'app',
  defaults,
})
export class AppState {}
