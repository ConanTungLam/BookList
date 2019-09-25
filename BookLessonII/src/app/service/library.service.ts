import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface defaultBook {
  id: number,
  name: string,
  description: string,
  price: number,
  amount: number
}

@Injectable({
  providedIn: 'root'
})


export class LibraryService {
  //  books: any[] = [
  //   { id: 1, name: 'Truyen Kieu', description: 'This descrition for book.', price: '500', amount: '20' },
  //   { id: 2, name: 'Luc Van Tien', description: 'This descrition for book.', price: '600', amount: '15' },
  //   { id: 3, name: 'Chi Pheo', description: 'This descrition for book.', price: '220', amount: '80' },
  //   { id: 4, name: 'Rung Xa Nu', description: 'This descrition for book.', price: '1110', amount: '65' },
  //   { id: 5, name: 'Song', description: 'This descrition for book.', price: '75', amount: '12' },
  //   { id: 6, name: 'Nam Quoc Son Ha', description: 'This descrition for book.', price: '300', amount: '45' },
  //   { id: 7, name: 'Nguoi Dua Thu', description: 'This descrition for book.', price: '580', amount: '66' },
  //   { id: 8, name: 'Nguoi Me', description: 'This descrition for book.', price: '900', amount: '82' },
  //   { id: 9, name: 'Phia Sau Bai Bien', description: 'This descrition for book.', price: '150', amount: '5' },
  //   { id: 10, name: 'Luu Vong', description: 'This descrition for book.', price: '1500', amount: '74' },
  // ];

  constructor(private http: HttpClient) {

  }

  dataUrl: any = "http://localhost:3000/books/";

  getBookList(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
  getBook(id:number): Observable<any> {
    return this.http.get(this.dataUrl + id);
  }


}
