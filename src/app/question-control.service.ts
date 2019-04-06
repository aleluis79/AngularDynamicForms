import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      if (question.required) {
        if (question.type === 'email') {
          group[question.key] = new FormControl(question.value || '', [Validators.required, Validators.email]);
        } else {
          group[question.key] = new FormControl(question.value || '', [Validators.required]);
        }
      } else {
        group[question.key] = new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }
}
