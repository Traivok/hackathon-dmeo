import { Component } from '@angular/core';
import {KPI, MockService, TeamKPI} from "../../mock.service";
import {KpiService} from "../../manager/kpi.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  grade: number;
  kpi: TeamKPI;
  constructor(public readonly service: MockService,
              public readonly kpiService: KpiService) {
    this.kpi = this.kpiService.kpi;
    this.grade = parseFloat(localStorage.getItem('quizzResult') ?? '0');
  }

}
