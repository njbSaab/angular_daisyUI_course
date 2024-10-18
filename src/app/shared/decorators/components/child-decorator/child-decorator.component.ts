import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-child-decorator',
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss'
})
export class ChildDecoratorComponent implements AfterContentInit {

  @ContentChild("h2") h2!: ElementRef<HTMLHeadingElement>

  ngAfterContentInit(): void {
    // this.h2 && console.log(this.h2);
  }
}
