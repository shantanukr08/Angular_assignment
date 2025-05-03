import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexPlotOptions,
  ApexYAxis,
  ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Security Rating',
          data: [40, 60, 30, 50, 40, 70, 50, 60, 50, 60, 70, 50]
        }
      ],
      chart: {
        type: 'bar',
        height: 250,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 6
        }
      },
      fill: {
        colors: ['#a78bfa']
      },
      grid: {
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      yaxis: {
        title: {
          text: 'Security Rating'
        }
      }
    };
  }
}
