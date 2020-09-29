import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  exports: [
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
