import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextSectionComponent, OverviewListComponent, ResultDisplayComponent, Result, DeviceTypeService, FirebaseApiService, LinkService, OverviewListData } from 'kleinsendelbach-website-library';
import { Newsletter } from '../../types/newsletter';
import { FirebaseFunctions } from '../../types/firebase-functions';
import { InternalPathKey } from '../../types/internal-paths';

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [CommonModule, TextSectionComponent, OverviewListComponent, ResultDisplayComponent],
    templateUrl: './home.page.html',
    styleUrl: './home.page.sass'
})
export class HomePage {

    public newsletterResult: Result<Newsletter.Overview[]> | null = null

    constructor(
        public readonly deviceType: DeviceTypeService,
        private readonly firebaseApi: FirebaseApiService<FirebaseFunctions>,
        private readonly linkService: LinkService<InternalPathKey>
    ) {
        void this.fetchNewsletter();
    }

    private async fetchNewsletter() {
        this.newsletterResult = await this.firebaseApi.function('newsletter-getAll').call({});
        if (this.newsletterResult.isSuccess())
            this.newsletterResult = Result.success(this.newsletterResult.value.filter(newsletter => newsletter.alreadyPublished));
    }

    public newsletterOverviewListData(newsletter: Newsletter.Overview[]): OverviewListData<InternalPathKey> {
        return newsletter.map(newsletter => ({
            title: `${newsletter.title} | ${Newsletter.Month.title[newsletter.month]} ${newsletter.year}`,
            subtitle: newsletter.description,
            buttons: [{
                title: 'Anzeigen',
                action: null,
                link: this.linkService.paramLink(':id', { id: newsletter.id }),
                options: null
            }]
        }));
    }
}
