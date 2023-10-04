import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RevenueDataComponent } from './components/revenue-data/revenue-data.component';
import { SalesDataComponent } from './components/sales-data/sales-data.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    NgChartsModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, RevenueDataComponent, SalesDataComponent],
})
export class HomeModule {}
