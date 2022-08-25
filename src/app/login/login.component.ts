import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    email: new FormControl('strata@hotmail.com', [Validators.required, Validators.email]),
    contraseña: new FormControl('1234', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log();

  };

}
