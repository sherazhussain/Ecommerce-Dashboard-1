import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Inventory } from '@app/@shared/Models/inventory';
import { TableColumn } from '@app/@shared/Models/tableColumn';
import { DataService } from '@app/@shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  tableColumns: TableColumn[] = [];

  isLoading: boolean = false;
  searchString = new FormControl('');
  _tableData: any = [];

  constructor(private apiService: DataService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.initializeColumns();
    this.getInventoryList();
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
        name: 'Product Name',
        dataKey: 'product_name',
        position: 'left',
        isSortable: false,
      },

      {
        name: 'Status',
        dataKey: 'status',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Description',
        dataKey: 'description',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Product Image',
        dataKey: 'product_image',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Date',
        dataKey: 'date',
        position: 'left',
        isSortable: false,
      },
    ];
  }

  getInventoryList() {
    this.isLoading = true;
    this.apiService.get('/assets/data_files/inventory.json', Inventory).subscribe({
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

  updateStatus(data: any) {
    data.row.status = data.event.checked ? 'active' : 'inactive';
    this.toastr.success('Updated status successfully');
  }
}
