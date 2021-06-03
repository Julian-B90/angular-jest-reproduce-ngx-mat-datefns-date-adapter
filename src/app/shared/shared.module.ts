import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDateFnsDateModule } from 'ngx-mat-datefns-date-adapter';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    DatepickerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDateFnsDateModule,
  ],
  exports: [
    DatepickerComponent,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'de',
    },
  ],
})
export class SharedModule {}
