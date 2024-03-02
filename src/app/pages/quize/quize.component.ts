import { Component, OnInit } from '@angular/core';
import { Apollo, a } from 'apollo-angular';
import { quQL } from 'src/app/graphQL/graphQl.quries';

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
      query: quQL
    }).valueChanges.subscribe({
      next: (res) => {
          this.data = res?.data?['quize']: [];
          this.error = res?.error;
          this.loading = res?.loading;

      }
    })
}
}
