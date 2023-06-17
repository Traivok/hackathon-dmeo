import {Component} from '@angular/core';
import {MockService, TeamKPI} from "../../mock.service";
import {ChartConfiguration} from "chart.js";
import {Router} from "@angular/router";
import {KpiService} from "../kpi.service";

@Component({
    selector: 'app-team-kpi',
    templateUrl: './team-kpi.component.html',
    styleUrls: ['./team-kpi.component.scss']
})
export class TeamKPIComponent {
    public kpi: TeamKPI;

    public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
        responsive: true,
    };

    public radarChartLabels: string[];

    public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'];

    constructor(public readonly service: MockService,
                public readonly kpiService: KpiService,
                ) {
        this.kpi = this.kpiService.kpi;
        this.radarChartLabels = this.kpiService.radarChartLabels;
        this.radarChartOptions = this.kpiService.radarChartOptions;
        this.radarChartDatasets = this.kpiService.radarChartDatasets;
    }

    toStyle(icon: string): { [p: string]: string } {
        return {
            'background-image': `url(${icon})`,
            'background-size': 'cover',
        }
    }
}
