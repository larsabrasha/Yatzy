import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.scss'],
})
export class ToplistComponent implements OnInit {
  @Output()
  dismiss = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  _dismiss() {
    this.dismiss.emit();
  }

  // @HostListener('click', ['$event'])
  // onClick(event: Event) {
  //   console.log('click toplist component');
  //   this.dismiss.emit();
  // }
}
