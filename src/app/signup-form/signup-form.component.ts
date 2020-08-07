import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValid } from './username.valid';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form=new FormGroup({
    username: new FormControl('', [Validators.minLength(4), Validators.required, UsernameValid.CannotContainSpace]),
    password: new FormControl('', Validators.required)
  });

  get _username(){
    return this.form.get('username');
  }

  get _password() {
    return this.form.get('password');
  }
}
