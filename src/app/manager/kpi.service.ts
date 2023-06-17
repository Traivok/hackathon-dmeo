import {Injectable} from '@angular/core';
import {Collaborator, MockService, TeamKPI} from "../mock.service";
import {ChartConfiguration, ChartDataset} from "chart.js";

@Injectable({
    providedIn: 'root'
})
export class KpiService {
    public kpi: TeamKPI;

    public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
        responsive: true,
    };

    public radarChartLabels: string[];

    public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'];

    constructor(public readonly service: MockService) {
        this.kpi = this.service.getTeamKpi(this.service.company);
        const skills = this.kpi.skills;
        this.radarChartLabels = Object.keys(skills);
        const data = this.normalize(Object.values(skills));
        this.radarChartDatasets = [
            {
                label: 'Habilidades da Equipe',
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

    normalize(data: number[]): number[] {
        const max = Math.max(...data);
        const min = Math.min(...data);
        return data.map(d => 10 * (d - min) / (max - min));
    }

    getKpi(c: Collaborator): ChartDataset<"radar", (number | null)[]> {
        const skills = Object.keys(this.kpi.skills);

        const courses = c.kpi?.courses ?? [];

        const data = skills.map(s =>
            courses.filter(c => c.done && c.subject === s).length ? 10 : 1);

        return {
            label: `Habilidades de ${c.name}`,
            data,
            fill: true,
            backgroundColor: 'rgba(0,60,128,0.2)',
            borderColor: 'rgb(0,60,128)',
            pointBackgroundColor: 'rgb(0,60,128)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(0,60,128)'
        };
    }

}
