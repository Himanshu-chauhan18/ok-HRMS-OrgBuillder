import { Component } from '@angular/core';
import { WidgetComponent } from "../widget/widget.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
