import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'instructioner-ui';

  exercise = {
    title: "some title",
    attemptCount: 2,
    isFinished: false,
    isCorrect: false,
    content: "content",
    hints: []
  };
}
