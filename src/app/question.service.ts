import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'color',
        label: 'Color',
        options: [
          {key: 'red',  value: 'Red'},
          {key: 'blue',  value: 'Blue'},
          {key: 'silver',   value: 'Silver'},
          {key: 'green', value: 'Green'}
        ],
        required: true,
        order: 4,
        width: 300
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Alejandro',
        required: true,
        order: 1,
        width: 400
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        required: true,
        type: 'email',
        order: 2,
        width: 300
      }),

      new TextboxQuestion({
        key: 'date',
        label: 'Date',
        value: '2019-01-01',
        required: false,
        type: 'date',
        order: 3,
        width: 200
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
