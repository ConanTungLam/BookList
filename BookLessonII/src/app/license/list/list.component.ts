import { Component, OnInit, ViewChild } from '@angular/core';
import { LicenseService } from 'src/app/service/license.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listBook: any;
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'description', 'time', 'action'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private licenseService: LicenseService
  ) {

  }

  ngOnInit() {
    this.getListBooks();
  }


  getListBooks() {
    this.licenseService.getLicenseList().subscribe(data => {
      this.listBook = data;
      this.dataSource = new MatTableDataSource(this.listBook);
      this.dataSource.sort = this.sort;
    }
    );
  }


  deleteItem(id:number){
    this.licenseService.deleteItem(id).subscribe(data =>{
      this.getListBooks();
    });
  }
}
