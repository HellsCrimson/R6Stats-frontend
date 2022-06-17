import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSearchBarComponent } from './user-search-bar/user-search-bar.component';
import { PvpStatsComponent } from './pvp-stats/pvp-stats.component';
import { PveStatsComponent } from './pve-stats/pve-stats.component';
import { OverallStatsComponent } from './overall-stats/overall-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserSearchBarComponent,
    PvpStatsComponent,
    PveStatsComponent,
    OverallStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
