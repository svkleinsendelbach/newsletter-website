import { Route, Routes } from '@angular/router';
import { InternalPathKey, internalPaths } from './types/internal-paths';
import { Type } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { NewsletterPage } from './pages/newsletter/newsletter.page';
import { entries } from 'kleinsendelbach-website-library';

const internalRoutes: Record<InternalPathKey, Type<unknown>> = {
    home: HomePage,
    ':id': NewsletterPage
}

export const routes: Routes = [
    ...entries(internalRoutes).map<Route>(({ key, value }) => ({
        path: internalPaths[key].path,
        component: value
    })),
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
