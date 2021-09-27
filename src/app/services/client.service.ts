import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export enum Client {
  JAZZ = '🎷',
  POP = '🎸'
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _activeClient$ = new BehaviorSubject(Client.JAZZ);

  public activeClient$ = this._activeClient$.asObservable();

  public setActiveClient(client: Client): void {
    this._activeClient$.next(client);
  }
}
