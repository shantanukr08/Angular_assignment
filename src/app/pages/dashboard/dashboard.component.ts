import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { GridColumn, GridRow } from './../../model/grid.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  columns: GridColumn[] = [];
  rows: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getGridData().subscribe((res) => {
      this.columns = res.grid_columns; 
      this.rows = res.grid_data;
    });
  }
}
