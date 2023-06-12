import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {API_URL} from "../config";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  addCategory(name: string): Observable<any> {
    return this.http.post(
      `${API_URL}market/categories/`,
      {name}
    );
  }

  getAllByDetails(floor: number, bazar: string ): Observable<any> {
    return this.http.get(`${API_URL}market/boutique-address/?bazar=${bazar}&floor=${floor}`);
  }


  getAllCategories(): Observable<any> {
    return this.http.get(`${API_URL}market/categories/`)
  }

  save(request: any , container:string , addressId:number): Observable<any> {
    console.log(request)
    this.updateContainer(container ,addressId ).subscribe(res => console.log(res))
    return this.http.post(`${API_URL}market/boutique/`, request);
  }

  updateContainer(updatedContainer:string , addressId : number):Observable<any>{
    return this.http.patch(`${API_URL}/market/boutique-address/${addressId}/` ,{container:updatedContainer})
  }

  deleteBoutiqueById(id: any): Observable<any> {
    return this.http.delete(`${API_URL}market/boutique/${id}`);
  }

  update(id: any, request: any , addressId:number , container:string):Observable<any> {
    this.updateContainer(container ,id )
    return this.http
        .put(`${API_URL}market/boutique/${id}/`, request);
  }
}
