import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  repos: any;
  userName: string;
  clientId = 'd5ef47356c8ef583b6de';
  clientSecret = '625b8712900d7beb419370650f49c010a5fed158';

  constructor(private ht: HttpClient) {}

  findUser() {
    return this.ht
      .get(
        'https://api.github.com/users/' +
          this.userName +
          '?client_id=' +
          this.clientId +
          '&client_secret=' +
          this.clientSecret
      )
      .subscribe(dt => {
        this.user = dt;
        console.log(dt);
      });
    }
    fun1() {
      return this.ht
    .get(
      'https://api.github.com/users/' +
        this.userName +
        '/repos?client_id=' +
        this.clientId +
        '&client_secret=' +
        this.clientSecret
    )
    .subscribe(repo => {
      this.repos = repo;
    });
    }
}
