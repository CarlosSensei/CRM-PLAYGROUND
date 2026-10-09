import { Injectable } from '@angular/core';
import { CLIENTS_MOCK } from '../model/client.mock';
import { Client } from '../model/client.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  getClients(): Observable<Client[]> {
    return of(CLIENTS_MOCK);
  }

}