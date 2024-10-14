import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, Renderer2, OnChanges, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy{

  @Input() title!: string;
  @Output() eventChange = new EventEmitter<string>();

  public tempTitle!: string;
  public titleChild = "Child component"

  constructor(private renderer: Renderer2, private el: ElementRef) {
    // Добавляем класс в конструкторе
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement, 'color-regular');
    }, 1000);
    console.log("constructor");
  }
  ngOnChanges(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'color-primary');
      this.renderer.addClass(this.el.nativeElement, 'color-regular');
    }, 1000);
    console.log("OnChanges");
  }

  ngOnInit(): void {
    this.tempTitle = this.title;
        // Заменяем класс после рендера представления
        setTimeout(() => {
          this.renderer.removeClass(this.el.nativeElement, 'color-regular');
          this.renderer.addClass(this.el.nativeElement, 'color-accent');
        }, 1000);
        console.log("OnInit");
  }

  ngAfterViewInit(): void {
    // Заменяем класс после рендера представления
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'color-accent');
      this.renderer.addClass(this.el.nativeElement, 'color-primary');
    }, 1000);
    console.log("afterViewInit");

  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.el.nativeElement, 'color-primary');
    console.log("ngOnDestroy");
  }
  public changeTitle(): void {
    this.tempTitle = "I've changed";
    this.eventChange.emit(this.tempTitle);
  }
}
