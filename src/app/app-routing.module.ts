import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , redirectTo: 'pages/fruits' , pathMatch: 'full'},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(p => p.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
