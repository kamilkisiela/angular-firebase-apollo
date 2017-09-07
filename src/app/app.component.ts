import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    Items

    <button (click)="firebase()">Use Firebase</button>
    <button (click)="graphql()">Use GraphQL</button>

    <button (click)="refetch()">Refetch GraphQL</button>

    <ul>
      <li *ngFor="let item of items | async">
        {{item}}
      </li>
    </ul>
  `
})
export class AppComponent {
  items: Observable<any[]>;

  constructor(private api: ApiService) {}

  firebase() {
    this.items = this.api.firebase();
  }

  graphql() {
    this.items = this.api.graphql();
  }

  refetch() {
    this.items['refetch']();
  }
}
