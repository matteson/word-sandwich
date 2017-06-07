import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { DictionaryService } from './dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  word: string = '';
  leftBound: string = '';
  rightBound: string = '';

  display: string = '';

  real: boolean = false;

  wordLength = 3;

  constructor(public dictionaryService: DictionaryService) { }

  @HostListener('window:keypress', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    console.log(event);
    if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <=122)) {
      this.display += event.key;

      if (this.display.length == this.wordLength){
        this.real = this.checkWord(this.display);
      }

    }

  }

  ngOnInit(): void {
    this.leftBound = this.dictionaryService.getFirstWord();
    this.rightBound = this.dictionaryService.getLastWord();

    this.word = this.getRandomWord();

  }

  checkWord(word: any): boolean {
    console.log('checkWord');

    const isWord = this.dictionaryService.checkIfRealWord(word);

    console.log(isWord);
    console.log(word);
    console.log(this.word);
    console.log(word < this.word);

    if (isWord) {
      if (word <= this.word) {
        this.leftBound = word;
      }
      if (word >= this.word) {
        this.rightBound = word;
      }
    }

    this.display = '';

    return isWord;
  }

  getRandomWord(): any {
    return this.dictionaryService.getRandomWord();
  }
}
