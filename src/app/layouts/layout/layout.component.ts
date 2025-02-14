import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [FooterComponent, RouterOutlet, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
