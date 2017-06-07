/**
 * Created by andrew on 6/7/17.
 */
import {Component, HostListener, OnInit, ViewChild} from "@angular/core";
import {DictionaryService} from "../services/dictionary.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class Game implements OnInit {

  leftBound: string;
  rightBound: string;
  word: string;
  display: string;

  wordLength = 3;

  successCount = 0;

  complete: boolean = false;

  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit() {
    this.newRound();
  }

  newRound() {
    this.leftBound = this.dictionaryService.getFirstWord();
    this.rightBound = this.dictionaryService.getLastWord();
    this.word = this.dictionaryService.getRandomWord();
    this.display = '';
  }

  @HostListener('window:keypress', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    console.log(event);
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

  onReal(word: string): void {
    console.log(word);
    console.log(this.word);


    if (word <= this.word) {
      this.leftBound = word;
    }
    if (word >= this.word) {
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
    this.newRound();
  }

  onFail(): void {

    this.display = '';
  }

}
