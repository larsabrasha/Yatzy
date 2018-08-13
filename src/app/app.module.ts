import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { AppState } from './store/app.state';
import { environment } from '../environments/environment.prod';
import { DiceComponent } from './dice/dice.component';
import { SingleDiceComponent } from './single-dice/single-dice.component';

@NgModule({
  declarations: [AppComponent, DiceComponent, SingleDiceComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      // disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
