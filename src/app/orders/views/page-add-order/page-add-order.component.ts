import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {
  public order: Order;

  constructor(private ordersService:OrdersService, private router : Router){
    this.order = new Order();
  }

  public action(order: Order): void {
    this.ordersService.add(order).subscribe(() => {
    this.router.navigate(['orders']);
    });
  }

}
