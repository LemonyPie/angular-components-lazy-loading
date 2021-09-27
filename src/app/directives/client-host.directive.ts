import {Directive, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {Client, ClientService} from "../services/client.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ClientComponentManagerService} from "../services/client-component-manager.service";

@UntilDestroy()
@Directive({
  selector: '[appClientHost]'
})
export class ClientHostDirective implements OnInit {

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private clientService: ClientService,
    private clientComponentManagerService: ClientComponentManagerService
  ) { }

  public ngOnInit() {
    this.clientService.activeClient$.pipe(
      untilDestroyed(this)
    ).subscribe((client: Client) => (
      this.clientComponentManagerService.renderDashboardFeature(client, this.vcr)
    ));
  }
}
