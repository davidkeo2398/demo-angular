import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-tmpl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-tmpl.component.html',
  styleUrl: './button-tmpl.component.scss'
})
export class ButtonTmplComponent {
  isShow = 1;
}
