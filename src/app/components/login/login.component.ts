import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticateService: AuthenticateService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login(): void {
    console.log(this.loginForm)
    console.log(this.loginForm.controls['username'].value)
    console.log(this.loginForm.controls['password'].value)

    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    if (this.authenticateService.login(username, password)) {
      console.log('loggedin successfully');
    } else {
      console.log('username and password did not match');
    }

  }

}
