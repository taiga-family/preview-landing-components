import type {ApplicationConfig} from '@angular/core';
import {importProvidersFrom} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TUI_SANITIZER, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter([
            {
                path: '',
                pathMatch: 'full',
                loadComponent: async () => import('./home/home.component'),
            },
        ]),
        provideClientHydration(),
        importProvidersFrom(TuiRootModule, TuiDialogModule, TuiPushModule),
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
};
