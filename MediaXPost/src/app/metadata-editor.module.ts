import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MetaDataEditorComponent } from './metadata-editor.component';

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
  bootstrap: [MetaDataEditorComponent]
})
export class MetaDataEditorModule { }
