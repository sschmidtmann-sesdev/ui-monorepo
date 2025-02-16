import { Component } from '@angular/core';
import { FeatureDescripComponent } from './components/feature-descrip/feature-descrip.component';
import { AppListComponent } from './components/app-list/app-list.component';

@Component({
  selector: 'sesdev-ui-home',
  imports: [
    FeatureDescripComponent,
    AppListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
