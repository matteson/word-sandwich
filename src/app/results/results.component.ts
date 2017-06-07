import { Component, Input, OnInit } from '@angular/core';
import {GameResult} from "./game.result";
import {GameWord} from "./game.word";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input()
  result: GameResult;

  constructor() { }

  ngOnInit() {}

}
