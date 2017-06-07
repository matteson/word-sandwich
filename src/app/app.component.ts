import { Component, HostListener } from '@angular/core';
import {GameResult} from "./results/game.result";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  gameActive: boolean = false;
  title = "Word Sandwich";

  lastResult: GameResult = null;

  constructor() { }

  @HostListener('window:keypress', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onStart();
    }
  }

  onStart() {
    this.gameActive = true;
  }

  onGameFinished(event: GameResult) {
    console.log(event);
    this.lastResult = event;
    this.gameActive = false;
  }
}
