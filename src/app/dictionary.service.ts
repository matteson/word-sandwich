import { Injectable } from '@angular/core';
import { words3 } from './words-3';

@Injectable()
export class DictionaryService {

  private words: any;
  constructor() {
    this.words = words3;
  }

  getRandomWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfRealWord(word: any) {
    console.log(word);
    console.log(this.words.indexOf(word));

    return this.words.indexOf(word) > -1;
  }

  getLastWord(): string {
    return this.words[this.words.length-1];
  }

  getFirstWord(): string {
    return this.words[0];
  }
}
