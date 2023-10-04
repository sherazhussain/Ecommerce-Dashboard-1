import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-data',
  templateUrl: './sales-data.component.html',
  styleUrls: ['./sales-data.component.scss'],
})
export class SalesDataComponent implements OnInit {
  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Orders',
      borderColor: '#041e39', // Customize the color here
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Sales',
      borderColor: '#d3d3d3', // Customize the color here
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
