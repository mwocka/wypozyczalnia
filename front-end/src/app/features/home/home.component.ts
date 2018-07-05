import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../core/services/category.service';
import {fadeInAnimation} from '../../shared/animations';
import {CategoryModel} from '../../core/models/category';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation()]
})
export class HomeComponent implements OnInit {

  private categorySub$: Subscription;
  public category: Array<CategoryModel>;

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getComponents();
  }

  getComponents() {
    this.categorySub$ = this.categoryService.getCategory().subscribe(
      res => {
        this.category = res;
        console.log(res);
      },
      error => {
        console.log('Error');
      }
    );
  }

}
