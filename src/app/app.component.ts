import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EnvironmentService, FirebaseApiService, LinkService, StyleConfigService, DeviceTypeService } from 'kleinsendelbach-website-library';
import { environment } from './environment/environment';
import { Environment } from './types/environment';
import { baseUrl, colorConfig } from './config/setup.config';
import { InternalPathKey, internalPaths } from './types/internal-paths';
import { FirebaseFunctions, firebaseFunctionResultMappers } from './types/firebase-functions';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {

    constructor(
        private readonly environmentService: EnvironmentService<Environment>,
        private readonly firebaseApiService: FirebaseApiService<FirebaseFunctions>,
        private readonly linkService: LinkService<InternalPathKey>,
        private readonly styleConfigService: StyleConfigService,
        public readonly deviceType: DeviceTypeService
    ) {
        this.environmentService.setup(environment);
        this.firebaseApiService.setup(firebaseFunctionResultMappers);
        this.linkService.setup(internalPaths, baseUrl);
        this.styleConfigService.setup(colorConfig);
    }
}
