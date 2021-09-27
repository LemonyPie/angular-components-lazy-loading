import {Component, Inject} from '@angular/core';
import {MusicInstrument} from "../../../app.const";

@Component({
  selector: 'app-dashboard-pop',
  templateUrl: './dashboard-pop.component.html',
  styleUrls: ['./dashboard-pop.component.scss']
})
export class DashboardPopComponent {

  constructor(
    @Inject(MusicInstrument) public readonly musicInstrument: string
  ) { }

}
