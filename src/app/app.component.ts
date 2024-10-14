import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcModule } from './calc-module/calc.module';
import { NavigationsComponent } from './shared/navigations/navigations.component';
import { PipeModule } from './shared/pipe/pipe.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CalcModule, NavigationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'I love Angular';

  public congrat = 'Congratulations! Your app is running. 🎉';
  public tooltip="show Message"

  showMessage = false
  toggleMessage(){
    this.showMessage = !this.showMessage
  }
}
