import { Routes } from '@angular/router';
import { ListComponent } from './core/users/list/list.component';
import { NewComponent } from './core/users/new/new.component';
import { SingleComponent } from './core/users/single/single.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'info/:id',
    component: SingleComponent
  }
];
