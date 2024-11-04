import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-quick-search-header',
  standalone: true,
  imports: [MenubarModule,ButtonModule],
  templateUrl: './quick-search-header.component.html',
  styleUrl: './quick-search-header.component.css'
})
export class QuickSearchHeaderComponent {

}
