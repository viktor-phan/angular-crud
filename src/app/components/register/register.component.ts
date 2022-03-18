import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData: any = {};

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/products']);
      },
      (err) => console.log(err)
    );
  }
}
