import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [{ path: '', component: InventoryListComponent, data: { title: marker('Inventory List') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryManagementRoutingModule {}
