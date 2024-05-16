import type {ApplicationConfig, Injector} from '@angular/core';
import {importProvidersFrom, INJECTOR} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TUI_SANITIZER, TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_EXTENSIONS} from '@tinkoff/tui-editor';

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
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                import('@tinkoff/tui-editor/extensions/image-editor').then(
                    ({tuiCreateImageEditorExtension}) =>
                        tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
};
