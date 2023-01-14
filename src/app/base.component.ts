import { Directive, DoCheck, SimpleChanges } from '@angular/core';

@Directive()
export class BaseComponent implements DoCheck {
  private _changeCount = 0;

  constructor(private readonly _name: string) {
    console.log('Created', this._name);
  }

  public ngDoCheck(): void {
    this._changeCount += 1;
    console.log('Changed', this._name, this._changeCount);
  }
}
