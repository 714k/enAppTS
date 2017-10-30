import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule, NgSwitch } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { SidebarService } from './sidebar/sidebar.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SideBarRoutingModule } from './sidebar/sidebar.module';
import { ContentComponent } from './content/content.component';
import { CategoriesComponent } from './categories/categories.component';
import { VerbComponent } from './verb/verb.component';
import { CoverComponent } from './cover/cover.component';
import { ApiManagerComponent } from './api-manager/api-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentComponent,
    CoverComponent,
    CategoriesComponent,
    VerbComponent,
    ApiManagerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    SideBarRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full' },
      {path: 'api/v1/verbs/management', component: ApiManagerComponent}
    ])
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent, ToolbarComponent, SidebarComponent]
})
export class AppModule { }
