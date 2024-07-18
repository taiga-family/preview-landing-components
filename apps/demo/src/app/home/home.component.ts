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
    TuiAccordionModule,
    TuiCheckboxLabeledModule,
    TuiInputDateModule,
    TuiInputTagModule,
    TuiPushModule,
    TuiSliderModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {NgDompurifyModule, NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {TuiEditorModule, TuiEditorTool} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'home',
    imports: [
        CommonModule,
        FormsModule,
        NgDompurifyModule,
        TuiAccordionModule,
        TuiButtonModule,
        TuiCalendarModule,
        TuiCheckboxLabeledModule,
        TuiDropdownModule,
        TuiEditorModule,
        TuiHintModule,
        TuiInputDateModule,
        TuiInputTagModule,
        TuiLinkModule,
        TuiPushModule,
        TuiSliderModule,
        TuiSvgModule,
        TuiTextfieldControllerModule,
        TuiToggleModule,
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

    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];
    protected readonly labels = ['New', 'Read', 'Archived', 'Junk'];
    protected tags = ['Angular', 'Open source'];
    protected date: TuiDay | null = null;
    protected notification = false;
    protected slider = 80;
    protected editor = '';

    protected questions = [
        {
            question: 'Accordion 1',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            question: 'Accordion 2',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
            question: 'Accordion 3',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
    ];

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
