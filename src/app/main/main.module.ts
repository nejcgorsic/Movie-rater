import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import {ApiService} from '../api.service';

import {Routes, RouterModule, Route, Router} from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

import {ReactiveFormsModule} from '@angular/forms';



const routes: Routes = [
  {path: 'movies', component: MainComponent}
];

@NgModule({
  declarations: [MainComponent, MovieListComponent, MovieFormComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
