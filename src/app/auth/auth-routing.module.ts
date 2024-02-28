import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: 'login', loadChildren: () => import('./login/login.module').then(l => l.LoginModule)},
      {path: 'register', loadChildren: () => import('./register/register.module').then(l => l.RegisterModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
