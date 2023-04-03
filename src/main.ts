/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// ts = typescript
// module = ensemble de composants


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
