import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogoViewerComponent } from './logo-viewer/logo-viewer.component';

const routes: Routes = [
  { path: '', component: LogoViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
