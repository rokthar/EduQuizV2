import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``, loadChildren: () => import('./components/public/public.module').then(m => m.PublicModule),
  },
  {
    path: `admin`, loadChildren: () => import('./components/private/private.module').then(m => m.PrivateModule),
  },
  {
      path: `users`, loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  }
]

@NgModule({
  imports: [ RouterModule.forRoot( routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}