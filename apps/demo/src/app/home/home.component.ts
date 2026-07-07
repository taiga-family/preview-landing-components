import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    INJECTOR,
    Injector,
    SecurityContext,
    type TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_CALENDAR_DATE_STREAM,
    TuiMobileCalendarDropdown,
} from '@taiga-ui/addon-mobile';
import {tuiControlValue, type TuiDay, TuiPlatform} from '@taiga-ui/cdk';
import {
    TUI_BREAKPOINT,
    TuiButton,
    TuiCalendar,
    TuiCheckbox,
    TuiDialogService,
    TuiDropdown,
    TuiHint,
    TuiIcon,
    TuiLabel,
    TuiLink,
    TuiSlider,
} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {TuiEditor, TuiEditorTool} from '@taiga-ui/editor';
import {
    TuiAccordion,
    TuiInputChip,
    TuiInputDate,
    TuiPush,
    TuiSwitch,
    TuiTooltip,
} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'home',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAccordion,
        TuiButton,
        TuiCalendar,
        TuiCheckbox,
        TuiDropdown,
        TuiEditor,
        TuiHint,
        TuiIcon,
        TuiInputChip,
        TuiInputDate,
        TuiLabel,
        TuiLink,
        TuiPlatform,
        TuiPush,
        TuiSlider,
        TuiSwitch,
        TuiTooltip,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
    private readonly dompurifySanitizer = inject(NgDompurifySanitizer);
    private readonly dialogs = inject(TuiDialogService);
    private readonly cd = inject(ChangeDetectorRef);
    private readonly injector = inject(INJECTOR);

    protected readonly control = new FormControl<TuiDay | null>(null);
    protected readonly breakpoint$ = toObservable(inject(TUI_BREAKPOINT));

    protected readonly dialog$: Observable<TuiDay> = this.dialogs.open(
        new PolymorpheusComponent(
            TuiMobileCalendarDropdown,
            Injector.create({
                providers: [
                    {
                        provide: TUI_CALENDAR_DATE_STREAM,
                        useValue: tuiControlValue(this.control),
                    },
                ],
                parent: this.injector,
            }),
        ),
        {
            appearance: 'fullscreen',
            closable: false,
            data: {single: true},
        },
    );

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
        this.control.setValue(date);
    }

    protected call(content: TemplateRef<HTMLElement>): void {
        this.dialogs
            .open(content, {
                appearance: 'call',
                closable: false,
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

    protected openMobileCalendar(): void {
        this.dialog$.subscribe((value) => this.control.setValue(value));
    }
}
