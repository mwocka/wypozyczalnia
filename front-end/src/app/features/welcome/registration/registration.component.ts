import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/user.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [fadeInAnimation()]
})
export class RegistrationComponent implements OnInit {

  name = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  phone = new FormControl('', Validators.required);

  hide = true;
  error: string;

  constructor(private router: Router, private userService: UserService) {
  }

  register() {
    if (this.username.valid && this.password.valid && this.name.valid && this.address.valid && this.phone.valid && this.email.valid) {
      this.userService.register(this.name.value, this.address.value, this.password.value, this.username.value,
        this.email.value, this.phone.value).subscribe(
        res => {
          this.router.navigate(['/welcome']);
          console.log('Zalogowano');
        },
        error => {
          this.error = 'Something wrong!';
          console.log('Something wrong!');
        }
      );
    }
  }

  ngOnInit() {
  }

}
