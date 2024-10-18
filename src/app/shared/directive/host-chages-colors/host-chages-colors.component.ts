import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { HostChangeColorDirective } from '../directives/host-change-color.directive copy';

@Component({
  selector: 'app-host-chages-colors',
  standalone: true,
  imports: [HostChangeColorDirective],
  templateUrl: './host-chages-colors.component.html',
  styleUrl: './host-chages-colors.component.scss'
})
export class HostChagesColorsComponent  {
  public title_second = 'Directive';
}
