import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextSectionComponent, NewsletterComponent, ResultDisplayComponent, Result, EnvironmentService, FirebaseApiService, LinkService, StyleConfigService, DeviceTypeService, NewsletterData } from 'kleinsendelbach-website-library';
import { baseUrl, colorConfig } from '../../config/setup.config';
import { environment } from '../../environment/environment';
import { Environment } from '../../types/environment';
import { FirebaseFunctions, firebaseFunctionResultMappers } from '../../types/firebase-functions';
import { InternalPathKey, internalPaths } from '../../types/internal-paths';
import { Newsletter } from '../../types/newsletter';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'newsletter-page',
    standalone: true,
    imports: [CommonModule, TextSectionComponent, NewsletterComponent, ResultDisplayComponent],
    templateUrl: './newsletter.page.html',
    styleUrl: './newsletter.page.sass'
})
export class NewsletterPage {

    public newsletterResult: Result<Newsletter | null> | null = null;

    constructor(
        private readonly firebaseApiService: FirebaseApiService<FirebaseFunctions>,
        private readonly linkService: LinkService<InternalPathKey>,
        public readonly deviceType: DeviceTypeService,
        public readonly route: ActivatedRoute
    ) {
        void this.fetchNewsletter();
    }

    private async fetchNewsletter() {
        const params = await firstValueFrom(this.route.params);
        if (!('id' in params) || typeof params['id'] !== 'string') {
            this.newsletterResult = Result.success(null);
            return;
        }
        this.newsletterResult = await this.firebaseApiService.function('newsletter-get').call({
            id: params['id']
        });
    }

    public newsletterData(newsletter: Newsletter): NewsletterData {
        return Newsletter.newsletterData(newsletter, true, this.linkService);
    }
}
