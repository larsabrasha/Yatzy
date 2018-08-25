import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  title: string;

  @Output()
  dismiss = new EventEmitter();

  eventListener: any;

  constructor() {}

  ngOnInit() {
    document.body.classList.add('modal-open');

    this.eventListener = document.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        this.dismiss.emit();
      }
    });
  }

  ngOnDestroy() {
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', this.eventListener);
  }

  _dismiss() {
    this.dismiss.emit();
  }
}
