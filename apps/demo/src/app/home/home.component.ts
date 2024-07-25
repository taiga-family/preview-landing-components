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
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import type {TuiDay} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCalendar,
    TuiDataList,
    TuiDialogService,
    TuiDropdown,
    TuiHint,
    TuiLabel,
    TuiLink,
} from '@taiga-ui/core';
import {TuiEditor, TuiEditorSocket, TuiEditorTool} from '@taiga-ui/editor';
import {
    TuiAccordion,
    TuiCheckbox,
    TuiDataListWrapper,
    TuiPush,
    TuiPushDirective,
    TuiSlider,
    TuiSwitch,
} from '@taiga-ui/kit';
import {
    TuiInputDateModule,
    TuiInputTagModule,
    TuiSelectModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'home',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        TuiAccordion,
        TuiButton,
        TuiCalendar,
        TuiCheckbox,
        TuiDataList,
        TuiDataListWrapper,
        TuiDropdown,
        TuiEditor,
        TuiEditorSocket,
        TuiHint,
        TuiInputDateModule,
        TuiInputTagModule,
        TuiLabel,
        TuiLink,
        TuiPush,
        TuiPushDirective,
        TuiSelectModule,
        TuiSelectModule,
        TuiSlider,
        TuiSvgComponent,
        TuiSwitch,
        TuiTextfieldControllerModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
    private readonly dompurifySanitizer = inject(DomSanitizer);
    private readonly dialogs = inject(TuiDialogService);
    private readonly cd = inject(ChangeDetectorRef);

    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];
    protected readonly labels = ['New', 'Read', 'Archived', 'Junk'];
    protected tags = ['Angular', 'Open source'];
    protected date: TuiDay | null = null;
    protected notification = false;
    protected slider = 80;
    protected editor = '';

    protected items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected testValue = new FormControl();

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

    protected purify(value: string): string | null {
        return this.dompurifySanitizer.sanitize(SecurityContext.HTML, value);
    }
}
