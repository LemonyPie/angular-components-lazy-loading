import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPopComponent } from './dashboard-pop.component';
import {MusicInstrument} from "../../../app.const";

@NgModule({
  declarations: [
    DashboardPopComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: MusicInstrument,
    useValue: '🎸'
  }]
})
export class DashboardPopModule {
  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  public resolveDashboardComponent(): ComponentFactory<DashboardPopComponent> {
    return this.cfr.resolveComponentFactory(DashboardPopComponent);
  }
}
