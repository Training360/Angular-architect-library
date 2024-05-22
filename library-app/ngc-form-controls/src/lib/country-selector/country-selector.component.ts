/* eslint-disable @typescript-eslint/ban-types */
import { CommonModule, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngc-country-selector',
  standalone: true,
  imports: [
    CommonModule,
    LowerCasePipe,
  ],
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CountrySelectorComponent,
      multi: true
    }
  ],
})
export class CountrySelectorComponent implements ControlValueAccessor {

  countries = [
    { code: 'HU', name: 'HUN' },
    { code: 'US', name: 'USA' },
    { code: 'NL', name: 'NL' },
    { code: 'JM', name: 'JM' },
    { code: 'SZ', name: 'SZ' },
  ];
  selected!: string;
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  selectCountry(code: string) {
    this.onTouched();
    this.selected = code;
    this.onChanged(code);
  }

  writeValue(value: string): void {
    this.selected = value ?? 'IN';
  }
  registerOnChange(fn: Function): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}


