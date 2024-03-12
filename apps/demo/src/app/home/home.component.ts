import {CommonModule} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    SecurityContext,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {TuiDay} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiCalendarModule,
    TuiDialogService,
    TuiDropdownModule,
    TuiHintModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiInputDateModule,
    TuiInputTagModule,
    TuiPushModule,
    TuiSliderModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {NgDompurifyModule, NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    standalone: true,
    selector: 'home',
    imports: [
        CommonModule,
        FormsModule,
        TuiInputTagModule,
        TuiToggleModule,
        TuiCalendarModule,
        TuiTextfieldControllerModule,
        TuiInputDateModule,
        TuiCheckboxLabeledModule,
        TuiButtonModule,
        TuiHintModule,
        TuiSliderModule,
        TuiSvgModule,
        TuiPushModule,
        TuiLinkModule,
        TuiDropdownModule,
        NgDompurifyModule,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
    private readonly dompurifySanitizer = inject(NgDompurifySanitizer);
    private readonly dialogs = inject(TuiDialogService);
    private readonly cd = inject(ChangeDetectorRef);

    protected readonly labels = ['New', 'Read', 'Archived', 'Junk'];
    protected tags = ['Angular', 'Open source'];
    protected date: TuiDay | null = null;
    protected notification = false;
    protected slider = 80;

    protected onDay(date: TuiDay): void {
        this.date = date;
    }

    protected call(content: TemplateRef<HTMLElement>): void {
        this.dialogs
            .open(content, {
                appearance: 'call',
                closeable: false,
                dismissible: false,
            })
            .subscribe();
    }

    protected toggle(open: boolean): void {
        this.notification = open;
        this.cd.detectChanges();
    }

    protected purify(value: string): string {
        return this.dompurifySanitizer.sanitize(SecurityContext.HTML, value);
    }
}
