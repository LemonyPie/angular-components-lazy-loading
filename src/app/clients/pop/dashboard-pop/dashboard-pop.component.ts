import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {MusicInstrument} from "../../../app.const";

@Component({
  selector: 'app-dashboard-pop',
  templateUrl: './dashboard-pop.component.html',
  styleUrls: ['./dashboard-pop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPopComponent {

  @Input()
  heading: string | undefined;

  constructor(
    @Inject(MusicInstrument) public readonly musicInstrument: string
  ) { }

}
