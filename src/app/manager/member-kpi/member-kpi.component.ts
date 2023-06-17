import {Component, Input, OnInit} from '@angular/core';
import {Collaborator, MockService, TeamKPI} from "../../mock.service";
import {filter} from "rxjs";
import {ChartConfiguration} from "chart.js";
import {KpiService} from "../kpi.service";

@Component({
    selector: 'app-member-kpi',
    templateUrl: './member-kpi.component.html',
    styleUrls: ['./member-kpi.component.scss']
})
export class MemberKPIComponent implements OnInit{
    @Input() collaborator!: Collaborator;
    public teamKpi: TeamKPI;


    public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
        responsive: true,
    };

    public radarChartLabels: string[];

    public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'];

    constructor(public readonly service: MockService,
                public readonly kpiService: KpiService,
    ) {
        this.teamKpi = this.kpiService.kpi;
        this.radarChartLabels = this.kpiService.radarChartLabels;
        this.radarChartOptions = this.kpiService.radarChartOptions;
        this.radarChartDatasets = [...this.kpiService.radarChartDatasets]; // clone
    }

    ngOnInit(): void {
        this.radarChartDatasets.unshift(this.kpiService.getKpi(this.collaborator));
    }

}
