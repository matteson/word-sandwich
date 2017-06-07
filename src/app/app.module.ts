import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DictionaryService } from './services/dictionary.service';
import { Game } from "./game/game";

@NgModule({
  declarations: [
    AppComponent,
    Game
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
