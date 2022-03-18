import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData: any = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/products']);
      },
      (err) => console.log(err)
    );
  }
}
