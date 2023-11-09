import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        NG_EVENT_PLUGINS,
        provideRouter(routes),
        provideClientHydration(),
        importProvidersFrom(
            BrowserAnimationsModule,
            TuiRootModule,
            TuiDialogModule,
            TuiPushModule,
        ),
    ],
};
