import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: ``,
        pathMatch: `full`,
        loadComponent: async (): Promise<any> =>
            import(`./home/home.component`).then(module => module.HomeComponent),
    },
];
