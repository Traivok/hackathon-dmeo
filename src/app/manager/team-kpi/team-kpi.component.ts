import {Component} from '@angular/core';
import {MockService, TeamKPI} from "../../mock.service";
import {ChartConfiguration} from "chart.js";
import {max} from "rxjs";
import {Router} from "@angular/router";

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
                private readonly router: Router,
                ) {
        this.kpi = this.service.getTeamKpi(this.service.company);
        const skills = (this.kpi.skills);
        this.radarChartLabels = Object.keys(skills);
        const data = this.normalize(Object.values(skills));
        this.radarChartDatasets = [
            {
                label: 'Principais Habilidades',
                data,
                fill: true,
                backgroundColor: 'rgba(255,131,69,0.2)',
                borderColor: 'rgb(255,131,69)',
                pointBackgroundColor: 'rgb(255,131,69)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255,131,69)'
            },
        ]
    }

    toStyle(icon: string): { [p: string]: string } {
        return {
            'background-image': `url(${icon})`,
            'background-size': 'cover',
        }
    }

    normalize(data: number[]): number[] {
        const max = Math.max(...data);
        const min = Math.min(...data);
        return data.map(d => 10*(d - min) / (max - min));
    }

}
