import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ScrollDispatchModule,
    NgCircleProgressModule.forRoot({
     
      // set defaults here
     
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
