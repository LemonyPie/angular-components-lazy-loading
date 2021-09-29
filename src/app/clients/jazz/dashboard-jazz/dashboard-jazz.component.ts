import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {MusicInstrument} from "../../../app.const";

@Component({
  selector: 'app-dashboard-jazz',
  templateUrl: './dashboard-jazz.component.html',
  styleUrls: ['./dashboard-jazz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardJazzComponent {

  @Input()
  heading: string | undefined;

  constructor(
    @Inject(MusicInstrument) public readonly musicInstrument: string
  ) { }
}
