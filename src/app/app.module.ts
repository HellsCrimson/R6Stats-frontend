import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSearchBarComponent } from './user-search-bar/user-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserSearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
