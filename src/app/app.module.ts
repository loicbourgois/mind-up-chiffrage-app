import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';
import { ChiffrageComponent } from './chiffrage/chiffrage.component';


@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    ChiffrageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
