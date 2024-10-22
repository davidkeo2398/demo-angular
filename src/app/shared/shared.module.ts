import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTmplComponent } from '../button-tmpl/button-tmpl.component';
import { ManageUserComponent } from '../manage-user/manage-user.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonTmplComponent, ManageUserComponent],
  exports: [ButtonTmplComponent,ManageUserComponent],
})
export class SharedModule {}
