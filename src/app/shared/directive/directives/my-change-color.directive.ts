import { Directive, ElementRef, Input, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[changeColor]',
  standalone: true
})
export class MyChangeColorDirective implements AfterViewInit, OnDestroy {
  @Input('changeColor') colors: string[] = [];
  private colorIndex = 0; // Индекс текущего класса
  private intervalId?: number | ReturnType<typeof setInterval>; // ID интервала для смены цветов
  private direction = 1; // 1 - движение вперед по массиву, -1 - назад

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.startColorCycle(); // Запуск цикла смены цветов
    }
  }

  private startColorCycle(): void {
    if (this.colors.length === 0) {
      return;
    }

    const cycleColors = () => {
      const intervalBetweenColors = 1000; // 1 секунда между сменой классов

      this.intervalId = setInterval(() => {
        const currentClass = this.colors[this.colorIndex];

        // Удаляем предыдущий класс
        if (this.colorIndex > 0 || this.direction === -1) {
          const previousClass = this.colors[this.colorIndex - this.direction];
          this.renderer.removeClass(this.el.nativeElement, previousClass);
        }

        // Применяем новый класс
        this.renderer.addClass(this.el.nativeElement, currentClass);

        // Меняем индекс в зависимости от направления
        this.colorIndex += this.direction;

        // Проверяем, достигли ли начала или конца массива
        if (this.colorIndex === this.colors.length - 1 || this.colorIndex === 0) {
          this.direction *= -1; // Меняем направление
        }
      }, intervalBetweenColors);
    };

    // Запускаем цикл смены классов
    cycleColors();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId as NodeJS.Timeout);
    }
  }
}
