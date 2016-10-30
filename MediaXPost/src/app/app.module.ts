import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TopBarModule } from  './topbar.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './topbar.component';
import { SiteSelectorComponent } from './site-selector.component';
import { MetaDataEditorComponent } from './metadata-editor.component';
import { StatusBarComponent } from './statusbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SiteSelectorComponent,
    MetaDataEditorComponent,
    StatusBarComponent
  ],
  imports: [
    TopBarModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
