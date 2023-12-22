import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PERSISTENCE } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { REGION } from '@angular/fire/compat/functions';
import { IMAGE_CONFIG } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RecaptchaV3Module } from 'ng-recaptcha';
import { routes } from './app.routes';
import { environment } from './environment/environment';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(
            CalendarModule.forRoot({
                provide: DateAdapter,
                useFactory: adapterFactory
            }),
            AngularFireModule.initializeApp(environment.firebase),
            RecaptchaV3Module
        ),
        { provide: REGION, useValue: 'europe-west1' },
        { provide: PERSISTENCE, useValue: 'local' },
        {
            provide: IMAGE_CONFIG,
            useValue: {
                disableImageSizeWarning: true,
                disableImageLazyLoadWarning: true
            }
        }
    ]
};
