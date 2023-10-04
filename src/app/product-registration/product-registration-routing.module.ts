import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [{ path: '', component: AddProductComponent, data: { title: marker('Add Product') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRegistrationRoutingModule {}
