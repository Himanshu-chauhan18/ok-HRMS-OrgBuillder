import { Component } from '@angular/core';
import { QuickSearchHeaderComponent } from '../quick-search-header/quick-search-header.component';

@Component({
  selector: 'app-app-container',
  standalone: true,
  imports: [QuickSearchHeaderComponent],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css'
})
export class AppContainerComponent {

}
