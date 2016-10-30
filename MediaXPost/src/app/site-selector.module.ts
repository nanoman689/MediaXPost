import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SiteSelectorComponent } from './site-selector.component';

@NgModule({
  declarations: [
    //TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SiteSelectorComponent]
})
export class SiteSelectorModule { }
