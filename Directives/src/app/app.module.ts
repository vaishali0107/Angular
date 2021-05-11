import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BasicHighlightDirective} from "./basic/basic.highlight.directive";
import { BetterHighlightDirective } from './better/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
@NgModule({
  declarations: [
    AppComponent,BasicHighlightDirective, BetterHighlightDirective, UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
