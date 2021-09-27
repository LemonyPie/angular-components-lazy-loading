import {
  ComponentFactory,
  ComponentRef,
  Injectable,
  Injector,
  ViewContainerRef,
  ɵcreateInjector as createInjector,
} from '@angular/core';
import {Observable} from "rxjs";
import {ClientComponentLoaderStrategyContext} from "./client-component-loader-strategy-context.service";
import {map, share, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientComponentManagerService {

  constructor(
    private clientComponentLoaderStrategyContext: ClientComponentLoaderStrategyContext
  ) { }

  public renderDashboardFeature(host: ViewContainerRef): Observable<ComponentRef<unknown>> {
    return this.loadComponentIntoHost(host);
  }

  private loadComponentIntoHost(host: ViewContainerRef): Observable<ComponentRef<unknown>> {
        return this.clientComponentLoaderStrategyContext.loadDashboard().pipe(
          map((module: any) => {
            const injector = createInjector(module, host.injector);
            const popModule = injector.get(module);
            const componentFactory = popModule.resolveDashboardComponent();
            return ClientComponentManagerService.placeComponent(host, componentFactory, injector);
          }),
          shareReplay(1)
        );
  }

  private static placeComponent<T>(host: ViewContainerRef, componentFactory: ComponentFactory<T>, parentInjector: Injector = host.injector): ComponentRef<T> {
    host.clear();
    return host.createComponent(componentFactory, 0, parentInjector)
  }
}
