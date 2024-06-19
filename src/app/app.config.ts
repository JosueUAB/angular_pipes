import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LOCALE_ID } from '@angular/core';

import { routes } from './app.routes';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs,'es');
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es' }	
  ]
};
