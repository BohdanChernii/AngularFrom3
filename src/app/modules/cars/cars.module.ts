import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
