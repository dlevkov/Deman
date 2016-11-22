import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';

import { NoContent } from './projects/common/components/no-content';
import { GridComponent } from './projects/common/components/grid/grid.component';
import { VodController } from './projects/vod/components/vod-controller/vod-controller.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'grid', component: GridComponent },
      { path: '', redirectTo:'/sidenav', pathMatch: 'full' },
      { path: 'sidenav', loadChildren: './projects/vod/components/side-nav/index#SideNavModule' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ], { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
