import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {catchError, map} from 'rxjs/operators';
import {UserModel} from '../models/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_LOGIN_URI = 'post/login';
const API_REG_URI = 'post/register';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string) {
    return this.http.post(API_LOGIN_URI,
      {username: username, password: password, employee: 'false'}, {responseType: 'text'})
      .pipe(map(res => {
          if (res) {
            sessionStorage.setItem('currentUser', res);
          }
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
  }

  public register(name: string, address: string, password: string, username: string, email: string, phone: string) {
    return this.http.post<any>(API_REG_URI, {
      name: name,
      address: address,
      phone: phone,
      email: email,
      password: password,
      username: username,
      employee: 'false'
    })
      .pipe(map(res => {
          if (res && res.status === 200) {
            sessionStorage.setItem('currentUser', JSON.stringify(res));
          }
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
  }


  /*private checkStatus(res: Response): void {
    if (res && res.status === 200) {
      localStorage.setItem('currentUser', JSON.stringify(res));
    }

  }*/

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      return Observable.throw(new Error('Login failed. Incorrect Data.'));
    } else if (error) {
      return Observable.throw(new Error(error.message));
    }
  }

}
