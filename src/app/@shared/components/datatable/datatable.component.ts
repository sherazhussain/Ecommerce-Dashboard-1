import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableColumn } from '@app/@shared/Models/tableColumn';
import { DataService } from '@app/@shared/services/data.service';
import * as moment from 'moment';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  isLoading: boolean = false;

  public tableDataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([]);
  // public tableDataSource = new MatTableDataSource([]);
  public displayedColumns!: string[];
  @ViewChild(MatPaginator, { static: false })
  matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  matSort!: MatSort;

  @Input() isPageable = false;
  @Input() isEditIcon = false;
  @Input() isToggleIcon = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns!: TableColumn[];
  @Input() rowActionIcon: string = '';
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() reloadTable: EventEmitter<any> = new EventEmitter();
  @Output() rowEditAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowToggleAction: EventEmitter<any> = new EventEmitter<any>();

  public searchSub$ = new Subject<string>();

  totalRecords: any = {};
  from_Component: string = '';

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any) {
    this.totalRecords = data;
    if (data) this.setTableDataSource(data);
  }

  constructor(private dataService: DataService, matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [...columnNames, this.rowActionIcon];
    } else {
      this.displayedColumns = columnNames;
    }
    this.searchData();

    // if (this.countdown) this.countdown.begin();
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    if (this.tableDataSource) this.tableDataSource.paginator = this.matPaginator;
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data.data);
    // this.tableDataSource.paginator = this.matPaginator;
    // this.tableDataSource.sort = this.matSort;
    // this.tableDataSource.paginator = this.matPaginator;
  }

  applyFilter(searchValue: string) {
    const filterValue = searchValue;
    this.tableDataSource.filter = filterValue;
    filterValue.trim().toLowerCase();
  }

  @Input() set searchValue(elem: any) {
    this.searchSub$.next(elem);
  }

  searchData() {
    this.searchSub$.pipe(debounceTime(400), distinctUntilChanged()).subscribe((filterValue: string) => {
      let value = filterValue.trim().toLowerCase();
      this.dataService.filters.search = value;
      this.reloadTable.next('');
    });
  }
  sortTable(sortParameters: any) {
    // defining name of data property, to sort by, instead of column name
    let keyName = sortParameters.active;
    sortParameters.active = this.tableColumns.find((column) => column?.name === sortParameters?.active)?.dataKey;
    this.dataService.filters.sortParams.key = keyName;
    this.dataService.filters.sortParams.order = sortParameters.direction;
    if (sortParameters.direction === 'asc') {
      this.reloadTable.emit();
    } else if (sortParameters.direction === 'desc') {
      this.reloadTable.emit();
    }
  }

  //Specifically for converting date to a format inside dataTable
  convert(element: any) {
    // convert(element);
    if (element.created_on) element.created_on = moment(new Date(element.created_on)).format('l');
    if (element.started_on) element.started_on = moment(new Date(element.started_on)).format('l');
    if (element.started_on) element.expired_on = moment(new Date(element.expired_on)).format('l');

    if (element.completed_on) element.completed_on = moment(new Date(element.completed_on)).format('l,LT');

    return element;
  }

  setPage(index: any) {
    this.dataService.filters.offset = index.pageIndex;
    this.dataService.filters.limit = index.pageSize;
    this.reloadTable.emit();
  }

  emitEditRowAction(row: any) {
    this.rowEditAction.emit(row);
  }
  emitToggleAction(event: any, row: any) {
    this.rowToggleAction.emit({ event, row });
  }
}
