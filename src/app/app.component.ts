import { Component } from '@angular/core';
import {Client, ClientService} from "./services/client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public client: typeof Client = Client;

  public activeClient$ = this.clientService.activeClient$;

  constructor(
    private clientService: ClientService
  ) { }

  public onChangeClient(client: Client): void {
    this.clientService.setActiveClient(client);
  }
}
