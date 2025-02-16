import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [
    RouterModule,
    Menubar,
    FontAwesomeModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sesdev-ui';
  faMicrochip = faMicrochip;
  faLogin = faArrowRightToBracket;
}
