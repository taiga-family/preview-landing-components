import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiCalendarModule,
    TuiHintModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiInputDateModule,
    TuiInputTagModule,
    TuiSliderModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

@Component({
    standalone: true,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        EventPluginsModule,
        TuiInputTagModule,
        TuiToggleModule,
        TuiCalendarModule,
        TuiTextfieldControllerModule,
        TuiInputDateModule,
        TuiCheckboxLabeledModule,
        TuiButtonModule,
        TuiHintModule,
        TuiSliderModule,
    ],
})
export class HomeComponent {
    readonly labels = ['New', 'Read', 'Archived', 'Junk'];
    tags = ['Angular', 'Open source'];
    date: TuiDay | null = null;

    onDay(date: TuiDay): void {
        this.date = date;
    }
}
