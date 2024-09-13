import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';
import {TuiEditor, TuiEditorSocket} from '@taiga-ui/editor';

@Component({
    standalone: true,
    selector: 'app',
    imports: [RouterOutlet, TuiEditor, TuiEditorSocket, TuiRoot],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
