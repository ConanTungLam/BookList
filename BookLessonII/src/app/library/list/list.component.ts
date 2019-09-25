import { Component, OnInit, ViewChild } from '@angular/core';
import { LibraryService } from '../../service/library.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [LibraryService]
})
export class ListComponent implements OnInit {
  listBook: any;
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'amount', 'action'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private libraryService: LibraryService
  ) {

  }

  ngOnInit() {
    this.getListBooks();
  }


  getListBooks() {
    this.libraryService.getBookList().subscribe(data => {
      this.listBook = data;
      this.dataSource = new MatTableDataSource(this.listBook);
      this.dataSource.sort = this.sort;
    }
    );
  }

}
