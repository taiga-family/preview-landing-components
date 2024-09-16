import { TuiTextfieldControllerModule, TuiInputDateModule, TuiInputTagModule } from "@taiga-ui/legacy";
import { NgDompurifyPipe } from "@taiga-ui/dompurify";
import { TuiEditor, TuiEditorSocket } from "@taiga-ui/editor";
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
import { TuiDialogService, TuiCalendar, TuiLabel, TuiDropdown, TuiIcon, TuiLink, TuiButton, TuiHint } from '@taiga-ui/core';
import { TuiAccordion, TuiPush, TuiSlider, TuiSwitch, TuiCheckbox } from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {TuiEditorTool} from '@taiga-ui/editor';

@Component({
    standalone: true,
    selector: 'home',
    imports: [
        CommonModule,
        FormsModule,
        NgDompurifyPipe,
        TuiAccordion,
        TuiButton,
        TuiCalendar,
        TuiLabel,
        TuiDropdown,
        TuiEditor, TuiEditorSocket,
        TuiHint,
        TuiInputDateModule,
        TuiInputTagModule,
        TuiLink,
        TuiPush,
        TuiSlider,
        TuiIcon,
        TuiTextfieldControllerModule,
        TuiSwitch, TuiCheckbox],
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
