import {Directive, Injector, Input, OnInit, ViewContainerRef} from '@angular/core';
import {ClientService} from "../services/client.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ClientComponentManagerService} from "../services/client-component-manager.service";

export enum ClientFeature {
  Dashboard
}

@UntilDestroy()
@Directive({
  selector: '[appClientHost]',
  exportAs: 'clientComponentHost'
})
export class ClientHostDirective implements OnInit {

  @Input()
  public appClientHost!: ClientFeature

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private clientService: ClientService,
    private clientComponentManagerService: ClientComponentManagerService
  ) { }

  public ngOnInit() {
    this.clientService.activeClient$.pipe(
      untilDestroyed(this)
    ).subscribe(() => this.renderFeature());
  }

  private renderFeature(): void {
    if (this.appClientHost === undefined) { throw new Error(`No feature with name ${this.appClientHost} detected!`); }

    switch (this.appClientHost) {
      case ClientFeature.Dashboard:
        this.clientComponentManagerService.renderDashboardFeature(this.vcr).subscribe();
    }
  }
}
