import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Directive,
  Injector,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {ClientService} from "../services/client.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ClientComponentManagerService} from "../services/client-component-manager.service";

@UntilDestroy()
@Directive({
  selector: '[appDashboard]',
  exportAs: 'appDashboard'
})
export class DashboardDirective implements OnInit {

  private _componentRef: ComponentRef<any> | undefined;
  private set componentRef(componentRef: ComponentRef<unknown>) {
    this._componentRef = componentRef;
    this._componentRef.instance.heading = this._heading;
  }

  private _heading: string | undefined;
  @Input()
  set heading(value: string | undefined) {
    this._heading = value;
    if (this._componentRef) { this._componentRef.instance.heading = value; }
  }

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private clientService: ClientService,
    private clientComponentManagerService: ClientComponentManagerService,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit() {
    this.clientService.activeClient$.pipe(
      untilDestroyed(this)
    ).subscribe(() => this.renderFeature());
  }

  private renderFeature(): void {
    this.clientComponentManagerService.renderDashboardFeature(this.vcr).subscribe(
      (componentRef: ComponentRef<unknown>) => {
        this.componentRef = componentRef
        this.cdr.markForCheck();
      }
    );
  }
}
