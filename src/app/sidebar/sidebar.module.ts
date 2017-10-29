import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from '../cover/cover.component';
import { CategoriesComponent } from '../categories/categories.component';

const verbsRoutes: Routes = [
  {
    path: 'home',
    component: CoverComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'verbs/category/A',
    component: CategoriesComponent,
    data: {
      title: 'Category A verbs'
    }
  },
  {
    path: 'verbs/category/B',
    component: CategoriesComponent,
    data: {
      title: 'Category B verbs'
    }
  },
  {
    path: 'verbs/category/C',
    component: CategoriesComponent,
    data: {
      title: 'Category C verbs'
    }
  },
  {
    path: 'verbs/category/D',
    component: CategoriesComponent,
    data: {
      title: 'Category D verbs'
    }
  },
];

@NgModule({
  imports: [
  	RouterModule.forChild(verbsRoutes)
  ],
  exports: [RouterModule]
})

export class SideBarRoutingModule {}


    
