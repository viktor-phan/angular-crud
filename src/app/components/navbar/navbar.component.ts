import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}
  isLoggedIn: boolean = this._auth.loggedIn();

  ngOnInit(): void {}
  logOut(): void {
    this._auth.logOut();
    this.isLoggedIn = this._auth.loggedIn();
    this._router.navigate(['products']);
  }
}
