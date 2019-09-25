import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { LibraryRoutingModule } from './library-routing.module';
import { ViewComponent } from './view/view.component';
import { LibraryService } from '../service/library.service';
import { AddComponent } from './add/add.component'

import { ObserversModule } from '@angular/cdk/observers';
import { MaterialModule } from '../material';



@NgModule({
  declarations: [ViewComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    ObserversModule,
    MaterialModule  
    
  ], providers: [LibraryService]
})
export class LibraryModule { }
