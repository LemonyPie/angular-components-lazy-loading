import {Component, Inject} from '@angular/core';
import {MusicInstrument} from "../../../app.const";

@Component({
  selector: 'app-dashboard-jazz',
  templateUrl: './dashboard-jazz.component.html',
  styleUrls: ['./dashboard-jazz.component.scss']
})
export class DashboardJazzComponent {

  constructor(
    @Inject(MusicInstrument) public readonly musicInstrument: string
  ) { }
}
