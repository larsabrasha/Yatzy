import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spot } from '../store/app.model';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
})
export class SpotComponent implements OnInit {
  @Input()
  spot: Spot;

  @Input()
  showingPossibleValues: boolean;

  @Output()
  select = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  _select() {
    this.select.emit();
  }
}
