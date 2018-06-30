import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../shared/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInAnimation()]
})
export class LoginComponent implements OnInit {

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  hide = true;
  error: string;

  constructor(private router: Router) {
  }

  login() {
    if (this.username.valid && this.password.valid) {
      console.log('Zalogowano');
    }
  }

  ngOnInit() {
  }

}
