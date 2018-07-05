import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../shared/animations';
import {UserService} from '../../../core/services/user.service';

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

  constructor(private router: Router, private userService: UserService) {
  }

  login() {
    if (this.username.valid && this.password.valid) {
      this.userService.login(this.username.value, this.password.value).subscribe(
        res => {
          this.router.navigate(['/home']);
        },
        error => {
          this.error = 'Username or password is incorrect';
        }
      );
    }

  }

  ngOnInit() {
  }

}
