import { Injectable } from '@angular/core';
import {DashboardPopModule} from "./dashboard-pop/dashboard-pop.module";
import {IClientComponentLoaderStrategy} from "../../services/client-component-loader-strategy-context.service";

@Injectable({
  providedIn: 'root'
})
export class PopLoadComponentStrategy implements IClientComponentLoaderStrategy {

  public async loadDashboard(): Promise<unknown> {
    const { DashboardPopModule } = await import('./dashboard-pop/dashboard-pop.module');
    return DashboardPopModule;
  }
}
