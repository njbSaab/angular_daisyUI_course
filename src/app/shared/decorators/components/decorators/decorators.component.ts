import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss'] // Исправлено на styleUrls
})
export class DecoratorsComponent implements AfterViewInit {

  public arrayNums = [1, 2, 3, 4, 5];

  // Добавляем тип ElementRef для получения ссылки на элемент DOM
  @ViewChild('h2') h2!: ElementRef;

  // Метод, который выполнится после инициализации представления
  ngAfterViewInit() {
  }
}
