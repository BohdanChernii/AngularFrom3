import {Component, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[]
  updateCar: ICar | null
  form: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {
    this._initForm()
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({cars}) => this.cars = cars)
  }

  _initForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000000)]),
      year: new FormControl(null, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())])
    })
  }

  save(): void {
    if (!this.updateCar) {
      this.carService.create(this.form.value).subscribe(value => [...this.cars, value])
    } else {
      this.carService.updateById(this.updateCar.id, this.form.value).subscribe(value => {
        const car = this.cars.find(car => car.id === this.updateCar?.id)
        Object.assign(car!, value)
      })
      this.updateCar = null
    }
    this.form.reset()
    window.location.reload()
  }

  lift(car: ICar) {
    this.updateCar = car
    this.form.setValue({
      model: car.model,
      price: car.price,
      year: car.year
    })
  }

  deleteById(id: number):void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id)
      this.cars.splice(index, 1)
    })
    console.log('del');
  }
}
