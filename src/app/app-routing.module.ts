import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { StoreSingleItemComponent } from './components/store-single-item/store-single-item.component';
import { hasRoleGuard } from './has-role.guard';
import { Role } from './role';
import { UnautorizedComponent } from './components/unautorized/unautorized.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [hasRoleGuard],
    data: {
      roles: [Role.ADMIN],
    },
  },
  {
    path: 'store/:pid',
    component: StoreSingleItemComponent,
  },
  {
    path: 'unauthorized',
    component: UnautorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
