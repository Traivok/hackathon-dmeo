import { Component } from '@angular/core';
import {MockService} from "../../mock.service";

@Component({
  selector: 'app-member-kpi-list',
  template: `
    <app-member-kpi [collaborator]="c" *ngFor="let c of service.collaborators"></app-member-kpi>
  `,
  styles: [
  ]
})
export class MemberKpiListComponent {

  constructor(public readonly service: MockService) {

  }

}
