import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getFruit } from './quize.service';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})
export class QuizeComponent implements OnInit {
  data : any[] = [];
  loading: boolean = false;
  error: any = ''
constructor(private apollo: Apollo){}

ngOnInit(): void {
    this.apollo.watchQuery({
      query: getFruit
    }).valueChanges.subscribe({
      next: (res: any) => {
          this.data = res?.data ? res.data.allUsers: [];
          this.loading = res?.loading;

      }
    })
}
}
