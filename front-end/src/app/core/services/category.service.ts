import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {catchError, map} from 'rxjs/operators';
import {UserModel} from '../models/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {CategoryModel} from '../models/category';

const API_GET_CATEGORY_URI = 'get/category';

@Injectable()
export class CategoryService {

  private category: CategoryModel = {
    category_id: null,
    name: null,
    description: null
  };

  constructor(private http: HttpClient) {
  }

  public getCategory(): Observable<Array<CategoryModel>> {
    return this.http.get<Array<CategoryModel>>(API_GET_CATEGORY_URI);
  }
}
