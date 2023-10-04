import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRegistrationRoutingModule } from './product-registration-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRegistrationRoutingModule,
  ],
})
export class ProductRegistrationModule {}
