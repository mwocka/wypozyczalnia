import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModelModel} from '../../../core/models/model';
import {Subscription} from 'rxjs';
import {ModelService} from '../../../core/services/model.service';
import {ItemModel} from '../../../core/models/item';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-category',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  public categoryId: string;
  private routeSub$: Subscription;
  private modelSub$: Subscription;
  private itemsSub$: Subscription;
  private reservedSub$: Subscription;
  public modelArray: Array<ModelModel>;
  public itemArray: Array<ItemModel>;

  imageToShow: any;
  isImageLoading = false;

  dateNow: Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  dateNowMilliseconds = this.dateNow.getTime();


  constructor(private route: ActivatedRoute, private modelService: ModelService) {
    this.routeSub$ = this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.getModels(this.categoryId);
    });
  }

  ngOnInit() {
  }

  getModels(_categoryId: string) {
    this.modelSub$ = this.modelService.getModel(_categoryId).subscribe(
      res => {
        this.modelArray = res;
        this.getImageFromService(this.modelArray[0].model_id);
        this.getItems(this.modelArray[0].model_id);
      },
      error => {
        console.log('Error');
      }
    );
  }


  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService(modelId: string) {
    /*this.isImageLoading = true;*/
    this.modelService.getPicture(modelId).subscribe(data => {
      this.createImageFromBlob(data);
      /* this.isImageLoading = false;*/
    }, error => {
      /*this.isImageLoading = false;*/
      console.log(error);
    });
  }

  shh(event) {
    this.getImageFromService(this.modelArray[event].model_id);
    this.getItems(this.modelArray[event].model_id);
  }

  getItems(_modelId: string) {
    this.itemsSub$ = this.modelService.getItems(_modelId).subscribe(
      res => {
        this.itemArray = res;
        console.log(res);
      },
      error => {
        console.log('Error');
      }
    );
  }

  reservedItems(_customerId: string, _itemId: string, _date: string) {
    this.reservedSub$ = this.modelService.makeReservation(_customerId, _itemId, _date).subscribe(
      res => {
        console.log(res);
      }, error => {
        console.log(error);
      }
    );
  }
}
