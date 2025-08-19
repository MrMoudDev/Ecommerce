import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  private counter: number = 0

  get value(): number {
    return this.counter
  }

  increment(): void {
    this.counter++
  }
  decrement(): void {
    if (this.counter > 0) {
    this.counter--
    }
  }
}
