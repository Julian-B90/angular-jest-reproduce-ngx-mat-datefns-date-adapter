import { Component } from '@angular/core';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter } from 'angular-calendar';
import {
  NgxDateFnsDateAdapter,
  NGX_MAT_DATEFNS_DATE_FORMATS
} from 'ngx-mat-datefns-date-adapter';

const DATE_FORMAT = 'dd.MM.yyyy';

export const MY_FORMATS = {
  parse: {
    dateInput: DATE_FORMAT,
  },
  display: {
    dateInput: DATE_FORMAT,
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: DATE_FORMAT,
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: NgxDateFnsDateAdapter,
      deps: [MAT_DATE_LOCALE, NGX_MAT_DATEFNS_DATE_FORMATS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatepickerComponent {
  picker: MatDatepicker<any>;
}
