import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ChartCreationComponent } from './chart-creation/chart-creation.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartCreationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
