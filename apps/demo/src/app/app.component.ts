import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    standalone: true,
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, RouterOutlet],
    template: '<router-outlet></router-outlet>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
