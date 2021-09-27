import {
  ComponentFactory,
  ComponentRef,
  Injectable,
  Injector,
  ViewContainerRef,
  ɵcreateInjector as createInjector,
} from '@angular/core';
import {Client} from "./client.service";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class ClientComponentManagerService {

  public renderDashboardFeature(client: Client, host: ViewContainerRef): Observable<ComponentRef<any>> {
    return fromPromise(ClientComponentManagerService.loadComponentIntoHost(client, host));
  }

  // TODO: move switch logic to client strategies and provide strategy through DI
  private static async loadComponentIntoHost(client: Client, host: ViewContainerRef): Promise<ComponentRef<any>> {
    switch(client) {
      case Client.POP: {
        const {DashboardPopModule} = await import('../clients/pop/dashboard-pop/dashboard-pop.module');
        const injector = createInjector(DashboardPopModule, host.injector);
        const popModule = injector.get(DashboardPopModule);
        const componentFactory = popModule.resolveDashboardComponent();
        return ClientComponentManagerService.placeComponent(host, componentFactory, injector);
      }
      case Client.JAZZ: {
        const {DashboardJazzModule} = await import('../clients/jazz/dashboard-jazz/dashboard-jazz.module');
        const injector = createInjector(DashboardJazzModule, host.injector)
        const jazzModule = injector.get(DashboardJazzModule);
        const componentFactory = jazzModule.resolveDashboardComponent();
        return ClientComponentManagerService.placeComponent(host, componentFactory, injector);
      }
    }
  }

  private static placeComponent<T>(host: ViewContainerRef, componentFactory: ComponentFactory<T>, parentInjector: Injector = host.injector): ComponentRef<T> {
    host.clear();
    return host.createComponent(componentFactory, 0, parentInjector)
  }
}
