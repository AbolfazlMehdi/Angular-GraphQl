import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizeComponent } from './quize.component';

const routes: Routes = [
  {path: '' , component: QuizeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizeRoutingModule { }
