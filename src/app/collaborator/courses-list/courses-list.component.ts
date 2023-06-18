import { Component } from '@angular/core';
import {MockService} from "../../mock.service";

@Component({
  selector: 'app-courses-list',
  template: `
      <main class="container">
          <app-general class="item"></app-general>
          <app-courses class="item" [course]="c" 
                       [first]="first"
                       *ngFor="let c of service.courses; let first = first"></app-courses>
      </main>

  `,
  styleUrls: [ 'courses-list.component.scss']

})
export class CoursesListComponent {

  constructor(public readonly service: MockService){}
}
