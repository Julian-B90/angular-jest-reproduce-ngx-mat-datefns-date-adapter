import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { de } from 'date-fns/locale';
import { NGX_MAT_DATEFNS_LOCALES } from 'ngx-mat-datefns-date-adapter';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


registerLocaleData(localeDe);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    SharedModule,
    NoopAnimationsModule,
  ],
  providers: [
    {
      provide: NGX_MAT_DATEFNS_LOCALES,
      useValue: [de],
    },
    {
      provide: LOCALE_ID,
      useValue: 'de',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
