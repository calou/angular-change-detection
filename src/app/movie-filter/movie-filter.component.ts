import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieFilterComponent extends BaseComponent {
  @Output()
  public onChange = new EventEmitter<string>();

  constructor() {
    super('movie-filter');
  }

  public change(value: string): void {
    this.onChange.emit(value);
  }
}
