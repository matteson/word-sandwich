/**
 * Created by andrew on 6/7/17.
 */
import {Component, HostListener, OnInit, ViewChild, Output, EventEmitter} from "@angular/core";
import {DictionaryService} from "../services/dictionary.service";
import {TimerComponent} from "../timer/timer.component";
import {GameResult} from "../results/game.result";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild(TimerComponent) timer: TimerComponent;

  @Output()
  gameResult: EventEmitter<GameResult> = new EventEmitter<GameResult>();

  leftBound: string;
  rightBound: string;
  word: string;
  display: string;

  wordLength = 3;

  start: number;

  successCount = 0;
  successWords: string[] = [];
  successTimes: number[] = [];

  active: boolean = false;
  complete: boolean = false;


  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit() {
    this.newRound();
  }

  newRound() {
    this.active = true;

    this.leftBound = this.dictionaryService.getFirstWord();
    this.rightBound = this.dictionaryService.getLastWord();
    this.word = this.dictionaryService.getRandomWord();
    this.display = '';

    this.start = Date.now();

    console.log(this.word);
    this.timer.start();
  }

  @HostListener('window:keypress', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (this.active) {
      if (
        (event.keyCode >= 65 && event.keyCode <= 90) ||
        (event.keyCode >= 97 && event.keyCode <=122)) {
        this.display += event.key;

        if (this.display.length == this.wordLength){
          const isWord = this.dictionaryService.checkIfRealWord(this.display);

          if ( isWord) {
            this.onReal(this.display);
          } else {
            this.onFail();
          }
        }
      }
    }

  }

  onReal(word: string): void {
    console.log(word);
    console.log(this.word);
    
    if (word <= this.word && this.leftBound <= word) {
      this.leftBound = word;
    }
    if (this.word <= word && word <= this.rightBound ) {
      this.rightBound = word;
    }

    if (word === this.word) {
      this.onSuccess();
    }

    this.display = '';
  }

  onSuccess(): void {
    this.complete = true;
    this.successCount += 1;
    this.successWords.push(this.word);
    this.successTimes.push((Date.now() - this.start)/1000);
    this.newRound();
  }

  onFail(): void {

    this.display = '';
  }

  onTimeComplete(): void {
    console.log('complete');

    this.gameResult.emit(new GameResult(this.successWords, this.successTimes));

    this.active = false;
  }
}
