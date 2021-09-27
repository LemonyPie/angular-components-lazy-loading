import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardJazzComponent } from './dashboard-jazz.component';
import {MusicInstrument} from "../../../app.const";

@NgModule({
  declarations: [
    DashboardJazzComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: MusicInstrument,
    useValue: '🎷'
  }]
})
export class DashboardJazzModule {
  constructor(
    private cfr: ComponentFactoryResolver,
  ) { }

  public resolveDashboardComponent(): ComponentFactory<DashboardJazzComponent> {
    return this.cfr.resolveComponentFactory(DashboardJazzComponent);
  }
}
