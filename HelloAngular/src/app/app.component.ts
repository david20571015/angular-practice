import { Component } from '@angular/core';
import { STATION_LIST } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = STATION_LIST;
}
