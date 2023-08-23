import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formLogin: FormGroup = new FormGroup({})

  constructor(private authServce: AuthService, private router: Router) {}

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
    this.authServce.sendCredentials(username, password).subscribe(data => {
      let dataResponse: Response = data;

      if(dataResponse) {
        localStorage.setItem("ATO", dataResponse.ATO);
        this.router.navigate(['']);
      }
    });
  }
}
