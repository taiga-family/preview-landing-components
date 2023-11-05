import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    provideAnimations,
} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiRootModule} from '@taiga-ui/core';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(routes),
        importProvidersFrom(BrowserModule, BrowserAnimationsModule, TuiRootModule),
    ],
};
