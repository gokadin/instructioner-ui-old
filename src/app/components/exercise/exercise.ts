import { Component, Input } from '@angular/core';

@Component({
  selector: 'exercise',
  templateUrl: './exercise.html',
  styleUrls: ['./exercise.scss']
})
export class Exercise {
  @Input() exercise: any;
}

