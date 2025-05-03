import { Component, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponentView {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43],
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ["Vendor A", "Vendor B", "Vendor C", "Vendor D"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
  }
}
