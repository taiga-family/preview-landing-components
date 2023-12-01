import {ApplicationConfig, importProvidersFrom, Sanitizer} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiDialogModule, TuiRootModule} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        importProvidersFrom(TuiRootModule, TuiDialogModule, TuiPushModule),
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
    ],
};
