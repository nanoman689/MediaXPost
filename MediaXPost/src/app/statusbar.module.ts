import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StatusBarComponent } from './statusbar.component';

@NgModule({
  declarations: [
    //StatusBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [StatusBarComponent]
})
export class StatusBarModule { }
