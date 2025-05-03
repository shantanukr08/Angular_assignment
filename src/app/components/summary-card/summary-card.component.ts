import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() icon = '';
  @Input() color = '#eee';
}
