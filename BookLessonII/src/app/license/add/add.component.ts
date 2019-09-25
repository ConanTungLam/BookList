import { Component, OnInit } from '@angular/core';
import { LicenseService, defaultLicese } from 'src/app/service/license.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 




  constructor(
    private licenseService: LicenseService,
    private location: Location,
  ) { }

  ngOnInit() {

  }


  onSubmit(bookValue:any) {
    this.licenseService.addLicense(bookValue).subscribe(() => {
      this.location.back();
    })
  }

}
