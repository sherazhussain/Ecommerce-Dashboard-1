import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-data',
  templateUrl: './revenue-data.component.html',
  styleUrls: ['./revenue-data.component.scss'],
})
export class RevenueDataComponent implements OnInit {
  public barChartOptions = {
    responsive: true,
  };

  public barChartLabels = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Orders',
      backgroundColor: '#041e39', // Customize the color here
      barThickness: 20,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
