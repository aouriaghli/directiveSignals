import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);
  public squareCounter = computed( () => this.counter() * this.counter() ); // es de solo lectura al poner el computed.

  increaseBy(value: number){
    //this.counter.set (this.counter() + value);
    this.counter.update( current => current + value);
  }
}
