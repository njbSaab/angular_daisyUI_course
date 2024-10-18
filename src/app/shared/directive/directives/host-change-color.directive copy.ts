import { Directive, HostBinding, HostListener, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[changeColor]',
  standalone: true
})
export class HostChangeColorDirective implements OnDestroy, AfterViewInit {
  @HostBinding('style.color') color: string = 'red';
  private colorChangeInterval: any;

  @HostBinding('class') bgColorClass: string = 'bg-gradient-primary-0';

  @HostListener('body:click', ['$event']) handleClick(event: PointerEvent): void {
    this.toggleBgColor();
  }
    // Массив классов, которые будут меняться
    private colorClasses: string[] = ['bg-gradient-primary-0', 'bg-accent', 'bg-regular'];

    // Текущий индекс для отслеживания активного класса
    private currentIndex: number = 0;


  constructor() {}

  ngAfterViewInit(): void {
    // this.startColorChange();
  }
  // Метод для циклического переключения класса
  private toggleBgColor(): void {
    this.currentIndex = (this.currentIndex + 1) % this.colorClasses.length;
    this.bgColorClass = this.colorClasses[this.currentIndex];
  }

  private startColorChange(): void {
    this.colorChangeInterval = setInterval(() => {
      this.color = this.getRandomColor();
    }, 4000);
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  ngOnDestroy(): void {
    if (this.colorChangeInterval) {
      clearInterval(this.colorChangeInterval);
    }
  }
}
