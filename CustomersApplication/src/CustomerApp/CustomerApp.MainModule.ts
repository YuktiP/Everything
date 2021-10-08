import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterComponent';

@NgModule({
  declarations: [
    CustomerComponent,SupplierComponent,HomeComponent,MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
