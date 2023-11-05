import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    provideAnimations,
} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';
import {routes} from './app.routes';
import {provideRouter} from '@angular/router';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(routes),
        importProvidersFrom(BrowserModule, BrowserAnimationsModule, TuiRootModule),
    ],
};
