import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DataPropertyGetterPipe } from './components/data-property-getter.pipe';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule],
  declarations: [LoaderComponent, DatatableComponent, DataPropertyGetterPipe],
  exports: [LoaderComponent, DatatableComponent, DataPropertyGetterPipe],
})
export class SharedModule {}
