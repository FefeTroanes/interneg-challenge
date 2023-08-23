import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formLogin: FormGroup = new FormGroup({})

  constructor(private authServce: AuthService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  sendLogin(): void {
    const { username, password } = this.formLogin.value;
    this.authServce.sendCredentials(username, password).subscribe(
      data => console.log(data)
    );
  }
}
