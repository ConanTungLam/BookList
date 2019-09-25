import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/service/library.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  book: any;
  currentBookid: number;
  constructor(private libraryService: LibraryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.currentBookid = +params.get('id');
      this.getBook(this.currentBookid);
    });
  }

  getBook(bookid: any) {
    this.libraryService.getBook(bookid).subscribe(data => {
      this.book = data;
    })
  
   
  }

}
