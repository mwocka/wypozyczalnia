import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModelModel} from '../../../core/models/model';
import {Subscription} from 'rxjs';
import {ModelService} from '../../../core/services/model.service';

@Component({
  selector: 'app-category',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  public categoryId: string;
  private routeSub$: Subscription;
  private modelSub$: Subscription;
  private pictureSub$: Subscription;
  public modelArray: Array<ModelModel>;

  imageToShow: any;
  isImageLoading = false;

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
        console.log(res);
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
    this.isImageLoading = true;
    this.modelService.getPicture(modelId).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }
}
