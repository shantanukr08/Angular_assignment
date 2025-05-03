import { Component, Input } from '@angular/core';
import { GridColumn, GridRow } from './../../model/grid.model';

@Component({
  selector: 'app-team-members-grid',
  templateUrl: './team-members-grid.component.html',
  styleUrls: ['./team-members-grid.component.scss']
})
export class TeamMembersGridComponent {
  @Input() columns: GridColumn[] = [];
  @Input() rows: GridRow[] = [];
}
