import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { WishListApplicationSharedModule } from 'app/shared';
import {
  AnswerComponent,
  AnswerDetailComponent,
  AnswerUpdateComponent,
  AnswerDeletePopupComponent,
  AnswerDeleteDialogComponent,
  answerRoute,
  answerPopupRoute
} from './';

const ENTITY_STATES = [...answerRoute, ...answerPopupRoute];

@NgModule({
  imports: [WishListApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [AnswerComponent, AnswerDetailComponent, AnswerUpdateComponent, AnswerDeleteDialogComponent, AnswerDeletePopupComponent],
  entryComponents: [AnswerComponent, AnswerUpdateComponent, AnswerDeleteDialogComponent, AnswerDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WishListApplicationAnswerModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
