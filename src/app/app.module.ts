import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RxjsOperatorsModule } from './feature-modules/rxjs-operators/rxjs-operators.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, RxjsOperatorsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
