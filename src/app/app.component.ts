import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, timer } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss'],
  animations:  [
    fadeInOnEnterAnimation({
      anchor:   'fadeIn',
      duration: 300
    }),
    fadeOutOnLeaveAnimation({
      anchor:   'fadeOut',
      duration: 300
    })
  ]
})
export class AppComponent implements OnInit {

  private readonly SECOND_IN_MILLIS = 1000;
  private readonly WRONG_ANSWER_VANISH_IN_MILLIS = 2200;

  public gameStarted = false;
  public form: FormGroup;
  public $timer: Observable<number>;
  private $resetSubject = new Subject();

  public answers: string[] = [];
  private states: string[] = [
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'florida',
    'georgia',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new hampshire',
    'new jersey',
    'new mexico',
    'new york',
    'north dakota',
    'north carolina',
    'ohio',
    'oklahoma',
    'oregon',
    'pennsylvania',
    'rhode island',
    'south carolina',
    'south dakota',
    'tennessee',
    'texas',
    'utah',
    'vermont',
    'virginia',
    'washington',
    'west virginia',
    'wisconsin',
    'wyoming'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      state: ['']
    });
    this.form.disable();
  }

  public ngOnInit(): void {
    this.$timer = this.$resetSubject.pipe(switchMap((val) => val != null ? timer(0, this.SECOND_IN_MILLIS) : EMPTY));
  }

  public submit() {
    const answer = this.form.value.state.toLowerCase();
    if (!this.answers.includes(answer)) {
      this.answers.push(answer);
      if (!this.isCorrect(answer)) {
        setTimeout(() => this.answers.splice(this.answers.indexOf(answer), 1), this.WRONG_ANSWER_VANISH_IN_MILLIS);
      }
    }
    this.form.reset();
  }

  public isCorrect(answer: string): boolean {
    return this.states.includes(answer);
  }

  public countCorrectAnswers(): number {
    return this.answers.filter(it => this.isCorrect(it)).length;
  }

  public start() {
    this.answers = [];
    this.gameStarted = true;
    this.$resetSubject.next(true);
    this.form.enable();
  }

  public stop() {
    this.form.disable();
    this.form.reset();
    this.gameStarted = false;
    this.$resetSubject.next(null);
  }
}
