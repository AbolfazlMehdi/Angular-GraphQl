import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizeRoutingModule } from './quize-routing.module';
import { QuizeComponent } from './quize.component';


@NgModule({
  declarations: [
    QuizeComponent
  ],
  imports: [
    CommonModule,
    QuizeRoutingModule
  ]
})
export class QuizeModule { }
