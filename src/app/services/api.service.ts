import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {API_URL} from "../config";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  addCategory(name: string): Observable<any> {
    return this.http.post(
      `http://localhost:8080/category/new?name=${name}`,
      {}
    );
  }

  getAllByDetails(floor: number, bazar: string): Observable<any> {
    return this.http.get(`${API_URL}market/boutique-address/?bazar=Sayakhat&floor=4&limit=27`);
  }


  getAllCategories(): Observable<any> {
    return of(['SPORT' , 'HOBBY' , 'HOME_THINGS']);
  }

  save(request: any): Observable<any> {
    console.log(request)
    return this.http.post(`http://localhost:8080/boutique/save`, request);
  }


  deleteBoutiqueById(id: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/boutique/${id}`);
  }

  update(id: any, request: any) {
    if (id) {
      this.http
        .put(`http://localhost:8080/boutique/${id}`, request)
        .subscribe((r) => console.log('response' + r));
    }
  }
}
