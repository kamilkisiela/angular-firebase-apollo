// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDhlks5fYTB1sky3O1hQ9xFwLDS6reszaE',
    authDomain: 'tryout-fca6f.firebaseapp.com',
    databaseURL: 'https://tryout-fca6f.firebaseio.com',
    projectId: 'tryout-fca6f',
    storageBucket: '',
    messagingSenderId: '97687928687'
  },
  graphql: {
    endpoint: 'https://pp13m5710.lp.gql.zone/graphql'
  }
};
