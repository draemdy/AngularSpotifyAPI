import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { MylistComponent } from './mylist/mylist.component';
import { AboutComponent } from './about/about.component';
   
const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
      path: 'search',
      component: SearchComponent
  },
  {
    path: 'mylist',
    component: MylistComponent
  },
  {
    path: 'about',
    component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
