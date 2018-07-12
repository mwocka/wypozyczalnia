import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {catchError, map} from 'rxjs/operators';
import {UserModel} from '../models/user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ModelModel} from '../models/model';
import {ItemModel} from '../models/item';

@Injectable()
export class ModelService {

  private category: ModelModel = {
    model_id: null,
    name: null,
    description: null,
    price_per_hour: null,
    category_id: null
  };

  constructor(private http: HttpClient) {
  }

  public getModel(categoryId: string): Observable<Array<ModelModel>> {
    return this.http.get<Array<ModelModel>>(`get/modelsByCategory/${categoryId}/`);
  }

  public getPicture(modelId: string): Observable<Blob> {
    return this.http.get(`get/imgOfModel/${modelId}/`, {responseType: 'blob'});
  }

  public getItems(modelId: string): Observable<Array<ItemModel>> {
    return this.http.get<Array<ItemModel>>(`get/itemsByModel/${modelId}/`);
  }

  public makeReservation(customerId: string, itemId: string, date: string) {
    const body = JSON.stringify({customer_id: customerId, item_id: itemId, date: date});
    return this.http.post('post/makeTransaction', body);
  }
}
