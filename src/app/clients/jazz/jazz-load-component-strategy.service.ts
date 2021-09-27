import { Injectable } from '@angular/core';
import {DashboardJazzModule} from "./dashboard-jazz/dashboard-jazz.module";
import {IClientComponentLoaderStrategy} from "../../services/client-component-loader-strategy-context.service";

@Injectable({
  providedIn: 'root'
})
export class JazzLoadComponentStrategy implements IClientComponentLoaderStrategy {

  public async loadDashboard(): Promise<unknown> {
    const { DashboardJazzModule } = await import('./dashboard-jazz/dashboard-jazz.module');
    return DashboardJazzModule;
  }
}
