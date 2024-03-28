import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Fruit } from '../model/fruit.model';
import { Apollo } from 'apollo-angular';
import { addFruit } from '../service/fruit.service';

@Component({
  standalone: true,

  selector: 'app-add-edit-fruit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-edit-fruit.component.html',
  styleUrls: ['./add-edit-fruit.component.scss'],
})
export class AddEditFruitComponent {
  activeModal = inject(NgbActiveModal);
  apollo = inject(Apollo);
  @Input() public mode: 'add' | 'edit' = 'add';

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required , Validators.min(.1)]),
  });


  
  public saveFruit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const form: Fruit = this.form.getRawValue();
    this.mode === 'add' ? this.onAddFruit(form) : this.onEditFruit(form);
  }

  private onAddFruit(data: Fruit): void {
    this.apollo.mutate<{createFruit: Fruit}>(
      {mutation:  addFruit , variables: {name: data.name , price: Number(data.price)}}
    ).subscribe({
      next: (res: any) => {
        console.log('success')
        this.activeModal.close()
      }
    })
  }
  private onEditFruit(data: Fruit): void {}
}
