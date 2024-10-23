import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTmplComponent } from '../button-tmpl/button-tmpl.component';
import { ManageUserComponent } from '../manage-user/manage-user.component';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonTmplComponent, ManageUserComponent],
  exports: [ButtonTmplComponent, ManageUserComponent],
  providers: [UserService],
})
export class SharedModule {}
