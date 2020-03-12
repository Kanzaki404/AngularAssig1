import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { SelectBeverageComponent } from './dialogue/select-beverage/select-beverage.component';
import { TheUsualComponent } from './dialogue/the-usual/the-usual.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    SelectBeverageComponent,
    TheUsualComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
