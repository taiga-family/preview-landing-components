import {ApplicationConfig, importProvidersFrom, Sanitizer} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(routes),
        provideClientHydration(),
        importProvidersFrom(TuiRootModule, TuiDialogModule, TuiPushModule),
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
    ],
};
