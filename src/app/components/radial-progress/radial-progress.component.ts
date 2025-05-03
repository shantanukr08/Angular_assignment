import { Component, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ApexPlotOptions, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-radial-progress',
  templateUrl: './radial-progress.component.html',
  styleUrls: ['./radial-progress.component.scss']
})
export class RadialProgressComponent {
  @ViewChild('chart') chart!: any;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [80],
      chart: {
        type: 'radialBar',
        offsetY: -10,
        height: 250
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '65%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              fontSize: '28px',
              fontWeight: 600,
              offsetY: 10
            }
          }
        }
      }
    };
  }
}
