import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseRoutingModule } from './license-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component'
import { MaterialModule } from '../material';
import { ObserversModule } from '@angular/cdk/observers';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    LicenseRoutingModule,
    MaterialModule,
    ObserversModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LicenseModule { }
