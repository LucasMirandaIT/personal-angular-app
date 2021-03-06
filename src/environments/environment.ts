// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  URL_GITHUB_AUTH: 'https://api.github.com/user',
  URL_GITHUB_REPO: 'https://api.github.com/user/repos',
  URL_BACKEND_PROD: 'https://miranda-lucas.herokuapp.com/',
  URL_BACKEND_LOCAL: 'http://localhost:3000/',
  URL_GNEWS: 'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=f7e657e1d6ef4de1a60c8246ad140bcb',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
