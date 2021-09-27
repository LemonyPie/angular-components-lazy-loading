import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {JazzLoadComponentStrategy} from "../clients/jazz/jazz-load-component-strategy.service";
import {PopLoadComponentStrategy} from "../clients/pop/pop-load-component-strategy.service";
import {Client, ClientService} from "./client.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {fromPromise} from "rxjs/internal-compatibility";

export interface IClientComponentLoaderStrategy {
  loadDashboard(): Promise<unknown>;
}

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class ClientComponentLoaderStrategyContext {

  private activeStrategy!: IClientComponentLoaderStrategy;

  constructor(
    private jazzLoadComponentStrategy: JazzLoadComponentStrategy,
    private popLoadComponentStrategy: PopLoadComponentStrategy,
    private clientService: ClientService,
  ) {
    this.clientService.activeClient$.pipe(untilDestroyed(this)).subscribe((client: Client) => {
      switch (client) {
        case Client.JAZZ:
          return this.activeStrategy = this.jazzLoadComponentStrategy;
        case Client.POP:
          return this.activeStrategy = this.popLoadComponentStrategy;
      }
    })
  }

  public loadDashboard(): Observable<unknown> {
    return fromPromise(this.activeStrategy.loadDashboard());
  }
}
