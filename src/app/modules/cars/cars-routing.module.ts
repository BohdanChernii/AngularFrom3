import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {CarService} from "./services/car.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CarsResolver} from "./services/resolvers/cars.resolver";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: CarsComponent, resolve: {cars: CarsResolver}}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
    CarService
  ]
})
export class CarsRoutingModule {
}
