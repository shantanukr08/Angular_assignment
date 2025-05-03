import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridColumn, GridRow } from './../model/grid.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://01.fy25ey01.64mb.io/';  // Your provided API

  constructor(private http: HttpClient) {}

  getGridData(): Observable<{ grid_columns: GridColumn[]; grid_data: GridRow[] }> {
    return this.http.get<{ grid_columns: GridColumn[]; grid_data: GridRow[] }>(this.apiUrl);
  }
}
