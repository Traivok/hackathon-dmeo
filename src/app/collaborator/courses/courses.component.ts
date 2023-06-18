import {Component, Input} from '@angular/core';
import {Course} from "../../mock.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() course!: Course;

}
