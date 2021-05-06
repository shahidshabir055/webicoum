import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { WebinarsComponent } from './webinars/webinars.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blogs', component: BlogComponent},
  {path: 'webinars', component: WebinarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
