import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { SharedModule } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { Users } from '../common/interfaces/user.interface';
import { TableModule } from 'primeng/table';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [SharedModule, TableModule],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss',
})
export class ManageUserComponent {
  constructor(private http: HttpClient, private userSercvice: UserService) {}

  users: Users[] = [];

  ngOnInit(): void {
    this.userSercvice.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
