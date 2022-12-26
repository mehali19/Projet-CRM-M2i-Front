import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './views/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './views/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './views/page-list-clients/page-list-clients.component';

const routes: Routes = [
  // clients/
  {path: '', component: PageListClientsComponent},
  // orders/add
  {path: 'add', component: PageAddClientComponent},
  // orders/edit
  {path: 'edit', component: PageEditClientComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
