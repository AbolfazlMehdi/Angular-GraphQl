import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'quize' , loadChildren: () => import('./quize/quize.module').then(q => q.QuizeModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
