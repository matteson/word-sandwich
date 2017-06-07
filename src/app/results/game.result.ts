/**
 * Created by andrew on 6/7/17.
 */
import { GameWord } from './game.word';

export class GameResult {

  gameWords: GameWord[] = [];

  constructor(
    words: string[],
    times: number[]
  ) {
    for (let iter = 0; iter < words.length; iter++){
      this.gameWords.push(new GameWord(words[iter], times[iter]));
    }
  }
}
