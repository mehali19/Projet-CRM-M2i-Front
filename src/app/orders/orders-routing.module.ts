import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './views/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './views/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './views/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // orders/
  {path: '', component: PageListOrdersComponent},
  // orders/add
  {path: 'add', component: PageAddOrderComponent},
  // orders/edit
  {path: 'edit', component: PageEditOrderComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
