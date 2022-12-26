import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageAddClientComponent } from './views/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './views/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './views/page-list-clients/page-list-clients.component';

@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent,
  ],
  imports: [CommonModule, ClientsRoutingModule, SharedModule],
})
export class ClientsModule {}
