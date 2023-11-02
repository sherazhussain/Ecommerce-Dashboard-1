import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Inventory } from '@app/@shared/Models/inventory';
import { TableColumn } from '@app/@shared/Models/tableColumn';
import { Users } from '@app/@shared/Models/users';
import { DataService } from '@app/@shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  tableColumns: TableColumn[] = [];

  isLoading: boolean = false;
  searchString = new FormControl('');
  _tableData: any = [];

  constructor(private apiService: DataService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.initializeColumns();
    this.getUsersList();
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
        name: 'First Name',
        dataKey: 'first_name',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Last Name',
        dataKey: 'last_name',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Email',
        dataKey: 'email',
        position: 'left',
        isSortable: false,
      },
      {
        name: 'Phone No',
        dataKey: 'phone',
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
        name: 'Date Of Birth',
        dataKey: 'date_of_birth',
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

  getUsersList() {
    this.isLoading = true;
    this.apiService.get('/assets/data_files/users.json', Users).subscribe({
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
