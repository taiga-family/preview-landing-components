import {
    type ApplicationConfig,
    importProvidersFrom,
    provideZonelessChangeDetection,
} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {provideTaiga} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {provideTuiEditor, TUI_EDITOR_SANITIZER} from '@taiga-ui/editor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideClientHydration(),
        provideRouter([
            {
                path: '',
                pathMatch: 'full',
                loadComponent: async () => import('./home/home.component'),
            },
        ]),
        importProvidersFrom(),
        provideTuiEditor({
            // You can disable these plugins
            // if you don't need them
            image: true,
            iframe: true,
            video: true,
            source: true,
            audio: true,
            details: true,
            detailsSummary: true,
            detailsContent: true,
        }),
        {
            provide: TUI_EDITOR_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        provideTaiga(),
    ],
};
