import { AfterViewChecked, Directive, DoCheck } from '@angular/core';

@Directive()
export class BaseComponent implements DoCheck, AfterViewChecked {
  private _changeCount = 0;

  constructor(private readonly _name: string) {
    console.log('Created', this._name);
  }

  public ngDoCheck(): void {
    this._changeCount += 1;
    console.log('Changed', this._name, this._changeCount);
  }

  public ngAfterViewChecked(): void {
    console.log('View checked', this._name, this._changeCount);
  }
}
