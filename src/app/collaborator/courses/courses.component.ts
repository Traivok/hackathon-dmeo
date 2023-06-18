import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../mock.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() course!: Course;
  @Input() first!: boolean;
  progress: number = 0;



  ngOnInit(): void {
    this.progress = this.first ? 100 : Math.random() * 100;
  }

}
