import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTmplComponent } from '../button-tmpl/button-tmpl.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonTmplComponent],
  exports: [ButtonTmplComponent],
})
export class SharedModule {}
