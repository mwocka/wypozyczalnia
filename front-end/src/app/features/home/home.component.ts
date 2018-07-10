import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  private routeSub$: Subscription;

  public categoryId: string;
  public category: Array<CategoryModel>;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
    this.routeSub$ = this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
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
