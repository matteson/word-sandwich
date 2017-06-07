import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DictionaryService } from './services/dictionary.service';
import { GameComponent } from "./game/game.component";
import { TimerComponent } from './timer/timer.component';

import { ButtonModule } from "primeng/primeng";
import { ResultsComponent } from './results/results.component';
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    TimerComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
