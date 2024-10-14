import { Component } from '@angular/core';
import { CalcModule } from '../../calc-module/calc.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EmptyPageComponent } from '../empty-page/empty-page.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CalcModule, EmptyPageComponent, RouterLink, RouterLinkActive],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

}
