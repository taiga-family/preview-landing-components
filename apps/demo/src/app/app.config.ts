import type {ApplicationConfig, Injector} from '@angular/core';
import {importProvidersFrom, INJECTOR} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiAlert, TuiDialog} from '@taiga-ui/core';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiPushDirective} from '@taiga-ui/kit';

export const appConfig: ApplicationConfig = {
    providers: [
        NG_EVENT_PLUGINS,
        provideClientHydration(),
        provideAnimations(),
        provideRouter([
            {
                path: '',
                pathMatch: 'full',
                loadComponent: async () => import('./home/home.component'),
            },
        ]),
        importProvidersFrom(TuiAlert, TuiDialog, TuiPushDirective),
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>
                    tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
    ],
};
