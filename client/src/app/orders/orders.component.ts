import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/models/order';
import { OrdersService } from './orders.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];
  constructor(private orderService: OrdersService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdersForUser().subscribe((orders: IOrder[]) => {
      this.orders = orders;
    }, error => {
      this.toastrService.error('Load your orders i could not');
      console.log(error);
    });
  }

}
