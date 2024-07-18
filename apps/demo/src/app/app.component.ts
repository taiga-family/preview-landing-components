import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiRootModule} from '@taiga-ui/core';
import {TuiEditorModule} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'app',
    imports: [RouterOutlet, TuiEditorModule, TuiRootModule],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
