import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./home/home.component')).HomeComponent,
    },
];
