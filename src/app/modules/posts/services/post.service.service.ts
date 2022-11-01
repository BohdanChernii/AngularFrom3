import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IPost} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../../connfigs";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }

}
