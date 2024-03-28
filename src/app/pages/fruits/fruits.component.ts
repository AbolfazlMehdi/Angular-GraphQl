import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fruit } from './model/fruit.model';
import { Apollo } from 'apollo-angular';
import {  getFruits } from './service/fruit.service';
import { map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditFruitComponent } from './add-edit-fruit/add-edit-fruit.component';

@Component({
  standalone: true,
  selector: 'app-fruits',
  imports: [CommonModule],
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent implements OnInit {
  public fruitList: Fruit[] = [];

  constructor(private apollo: Apollo,
    private modalService: NgbModal) {}
  ngOnInit(): void {
    this.getFruitsList();
  }

  private getFruitsList(): void {
    this.apollo
      .watchQuery({ query: getFruits , fetchPolicy: 'no-cache' })
      .valueChanges.pipe(map((x) => x.data))
      .subscribe({
        next: (res: any) => { 
          this.fruitList = res.allFruits;
        },
      });
  }

  public onAddNewFriut() : void {
    const modalRef = this.modalService.open(AddEditFruitComponent);
    modalRef.result.then((r) => {
      this.getFruitsList();
    }).catch((err) => console.log(err))
  }
}
