import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { DataService } from '@app/@shared/services/data.service';
import { TableColumn } from '@app/@shared/Models/tableColumn';
import { Inventory } from '@app/@shared/Models/inventory';
import { Revenue } from '@app/@shared/Models/revenue';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  tableColumns: TableColumn[] = [];

  _tableData: any = [];
  constructor(private quoteService: QuoteService, private apiService: DataService) {}

  ngOnInit() {
    this.initializeColumns();
    this.getRevenueList();
  }

  initializeColumns(): void {
    this.tableColumns = [
      {
        name: 'ID',
        dataKey: 'id',
        position: 'left',
        isSortable: false,
      },

      {
        name: 'Category',
        dataKey: 'category',
        position: 'left',
        isSortable: false,
      },

      {
        name: 'Quarterly 1',
        dataKey: 'quartly_1',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Quarterly 2',
        dataKey: 'quartly_2',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Quarterly 3',
        dataKey: 'quartly_3',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Quarterly 4',
        dataKey: 'quartly_4',
        position: 'left',
        isSortable: false,
      },
    ];
  }

  getRevenueList() {
    this.isLoading = true;
    this.apiService.get('/assets/data_files/revenue.json', Revenue).subscribe({
      next: (res: any) => {
        this._tableData = res;
        this.isLoading = false;
      },
      error: (error) => {
        this._tableData = [];
        this.isLoading = false;
      },
    });
  }
}
