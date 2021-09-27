import { Component} from '@angular/core';
import {ClientFeature} from "../directives/client-host.directive";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public readonly clientFeature = ClientFeature;

}
