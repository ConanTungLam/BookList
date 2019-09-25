import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface defaultLicese {
  id: number,
  name: string,
  description: string,
  time: number,
}


@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private http: HttpClient) { }

  dataUri: any = "http://localhost:3001/license/"

  getLicenseList(): Observable<any> {
    return this.http.get(this.dataUri);
  }

  getLicenseSingle(id: number): Observable<any>{
    return this.http.get(this.dataUri + id)
  }

  addLicense(value:defaultLicese): Observable<Object>{
    return this.http.post(this.dataUri, value);
  }
  editLicense(currentId:any, newId: any): Observable<Object>{
    return this.http.put(this.dataUri + currentId, newId )
  }
  deleteItem(id:number): Observable<Object>{
    return this.http.delete(this.dataUri + id)
  }
}
