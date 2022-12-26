import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent {
  public collection$!: Observable<Client[]>;
  public headers: string[];

  constructor(private clientsService: ClientsService) {
    this.collection$ = this.clientsService.collection$;
    this.headers = [
      'Prénom',
      'Nom',
      'E-mail',
      'N° de téléphone',
      'Adresse',
      'Pays',
      'Entreprise',
      'Etat',
    ];
  }
}
