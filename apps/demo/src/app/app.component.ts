import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiRootModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app',
    imports: [TuiRootModule, RouterOutlet],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
