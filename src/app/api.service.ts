import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private db: AngularFireDatabase,
    private apollo: Apollo
  ) {}

  firebase() {
    return this.db.list('/pets').map(pets => pets.map(({$value}) => $value));
  }

  graphql() {
    return this.apollo.watchQuery<{pets: string[]}>({
      query: gql`
        query pets {
          pets
        }
      `
    }).map(({data}) => data.pets);
  }

}
