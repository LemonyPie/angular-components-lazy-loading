import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Client, ClientService} from "./client.service";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SettingsComponentResolver implements Resolve<unknown> {

  constructor(
    private clientService: ClientService
  ) { }

  resolve(): Observable<unknown> {
    return this.clientService.activeClient$.pipe(
      // switchMap((client: Client) => {
      //   switch (client) {
      //     case Client.JAZZ:
      //       // return import('../clients/jazz/settings-jazz/settings-jazz.component').then(c => c.SettingsJazzComponent)
      //     case Client.POP:
      //       // return import('../clients/pop/settings-pop/settings-pop.component').then(c => c.SettingsPopComponent)
      //   }
      // })
    )
  }
}
