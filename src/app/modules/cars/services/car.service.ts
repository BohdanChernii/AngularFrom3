import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../../../interfaces";
import {urls} from "../../../../connfigs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars)
  }

  getById(id: number): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`)
  }

  create(data: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, data)
  }

  updateById(id: number, data: ICar): Observable<ICar> {
    return this.httpClient.put<ICar>(`${urls.cars}/${id}`, data)
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`)
  }

}
