import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { TeamKPIComponent } from './manager/team-kpi/team-kpi.component';
import { MemberKPIComponent } from './manager/member-kpi/member-kpi.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {NgChartsModule} from "ng2-charts";
import {MatIconModule} from "@angular/material/icon";
import { FilterPipe } from './filter.pipe';
import { MemberKpiListComponent } from './manager/member-kpi/member-kpi-list.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TeamKPIComponent,
        MemberKPIComponent,
        FilterPipe,
        FilterPipe,
        MemberKpiListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        NgChartsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
