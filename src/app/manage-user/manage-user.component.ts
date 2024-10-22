import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss',
})
export class ManageUserComponent {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(environment.apiEndpoint + '/user').subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
