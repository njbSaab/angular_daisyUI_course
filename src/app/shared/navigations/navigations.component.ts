import { Component } from '@angular/core';
import { CalcModule } from '../../calc-module/calc.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EmptyPageComponent } from '../empty-page/empty-page.component';

@Component({
  selector: 'app-navigations',
  standalone: true,
  imports: [CalcModule, EmptyPageComponent, RouterLink, RouterLinkActive],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.scss'
})
export class NavigationsComponent {

}
