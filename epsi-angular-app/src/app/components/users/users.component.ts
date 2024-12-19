import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {NgForOf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    UpperCasePipe,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit  {

  private httpService = inject(HttpService);

  public users: any = [];

  ngOnInit() {
    this.httpService
      .getAllUsers()
      .subscribe(data => {
        this.users = data;
      });
  }
}
