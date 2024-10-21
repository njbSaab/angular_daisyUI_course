import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  public counter = signal<number>(0)

  public dablCounter = computed(() => {
    return this.counter() * 2
  })
  public increment() {
    this.counter.set(this.counter() + 1)
  }
}
