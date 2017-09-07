import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ApolloModule } from 'apollo-angular';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { environment } from '../environments/environment';

export function getApollo() {
  return new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: environment.graphql.endpoint
    })
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ApolloModule.withClient(getApollo)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
