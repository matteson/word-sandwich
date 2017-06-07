import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output()
  notifyTimeComplete: EventEmitter<any> = new EventEmitter<any>();

  private futureNum: number;
  private increment = 120;
  private complete = false;

  private future: Date;
  private futureString: string;
  private diff: number;
  private $counter: Observable<number>;
  private subscription: Subscription;
  private message: string;

  constructor() {
    this.futureNum = Date.now();
    const d = new Date(+this.futureNum + (this.increment*1000));
    this.futureString = d.toString();
  }

  ngOnInit() {
    this.message = String(this.increment) + 's';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  start(): void {
    this.future = new Date(this.futureString);
    this.$counter = Observable.interval(200).map((x) => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      return x;
    });

    this.subscription = this.$counter
      .takeWhile((x) => !this.complete)
      .subscribe((x) => {
      if (this.diff > 0 ) {
        this.message = String(this.diff) + 's';
      } else {
        this.message = '0s';
        this.notifyTimeComplete.emit(true);

        this.complete = true;
      }
    });
  }
}
