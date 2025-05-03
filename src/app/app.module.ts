import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { GridComponent } from './components/grid/grid.component';
import { TeamMembersGridComponent } from './components/team-members-grid/team-members-grid.component';
import { VendorBreakdownComponent } from './components/vendor-breakdown/vendor-breakdown.component';
import { VendorMonitoredComponent } from './components/vendor-monitored/vendor-monitored.component';
import { ChartComponentView } from './components/chart/chart.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadialProgressComponent } from './components/radial-progress/radial-progress.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SummaryCardComponent,
    GridComponent,
    TopbarComponent,
    SidebarComponent,
    TeamMembersGridComponent,
    VendorBreakdownComponent,
    VendorMonitoredComponent,
    ChartComponentView,
    ToastComponent,
    LoaderComponent,
    BarChartComponent,
    RadialProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
