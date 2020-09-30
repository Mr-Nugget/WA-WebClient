import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList;

  constructor(private categoryService: CategoryService, private router :Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
      .then((data) => {
        this.categoriesList = data;
      }).catch((error) => {
        console.error(error);
      })
  }

  selectCategory(category){
    console.log(category);
    this.router.navigate(['/tripList'], {queryParams : category });
  }

}
