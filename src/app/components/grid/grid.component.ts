import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GridColumn, GridRow } from './../../model/grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() columns: GridColumn[] = [];
  @Input() rows: GridRow[] = [];

  @Output() rowAdded = new EventEmitter<void>();
  @Output() rowEdited = new EventEmitter<void>();
  @Output() rowDeleted = new EventEmitter<void>();

  selectedRows: Set<string> = new Set();
  currentPage: number = 1;
  pageSize: number = 10;

  get totalPages(): number {
    return Math.ceil(this.rows.length / this.pageSize);
  }

  get paginatedRows(): GridRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.rows.slice(start, end);
  }

  toggleSelectAll(checked: any) {
    if (checked.target.checked) {
      this.paginatedRows.forEach(row => this.selectedRows.add(row.id));
    } else {
      this.paginatedRows.forEach(row => this.selectedRows.delete(row.id));
    }
  }

  toggleRow(id: string, checked: any) {
    if (checked.target.checked) {
      this.selectedRows.add(id);
    } else {
      this.selectedRows.delete(id);
    }
  }

  addRow() {
    const newRow: GridRow = {
      id: Math.random().toString(36).substr(2, 9),
      name: { first_name: 'New', last_name: 'User', handle: '@newuser' },
      status: 'Customer',
      email: 'newuser@example.com',
      role: 'New Role',
      license_used: 0,
      teams: []
    };
    this.rows.push(newRow);
    this.rowAdded.emit();
  }

  editRow(row: GridRow) {
    alert(`Edit: ${row.name.first_name} ${row.name.last_name}`);
    this.rowEdited.emit();
  }

  confirmDelete(row: GridRow) {
    if (confirm('Are you sure you want to delete this row?')) {
      this.rows = this.rows.filter(r => r.id !== row.id);
      this.rowDeleted.emit();
      
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
