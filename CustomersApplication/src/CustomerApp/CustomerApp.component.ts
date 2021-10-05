import { Component } from '@angular/core';
import {Customer} from './CustomerApp.model'

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
  styleUrls: ['./CustomerApp.component.css']
})

export class CustomerComponent {
  title = 'CustomersApplication';

  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>(); 

  Add(){
    this.CustomerModels.push(this.CustomerModel); //Add new Customer to the collection
    this.CustomerModel = new Customer(); // clear UI 
  }
}
