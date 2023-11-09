import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(
            BrowserAnimationsModule,
            EventPluginsModule,
            TuiRootModule,
            TuiDialogModule,
            TuiPushModule,
        ),
        provideClientHydration(),
    ],
};
