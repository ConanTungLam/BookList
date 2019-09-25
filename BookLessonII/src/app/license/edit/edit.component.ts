import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LicenseService } from 'src/app/service/license.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  license: any;
  currentLicense: any;
  
  constructor(
    private route: ActivatedRoute,
    private licenseService: LicenseService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currentLicense = +params.get('id');
      this.getLicenseSingle(this.currentLicense);
      this.setForm();
    });
  }

  editLicenseForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    time: new FormControl('')
  });

  getLicenseSingle(licenseid: any) {
    this.licenseService.getLicenseSingle(licenseid).subscribe(data => {
      this.license = data;
    });
  }

  setForm(){
    this.licenseService.getLicenseSingle(this.currentLicense).subscribe(item => {
      if(item) {
        this.editLicenseForm.setValue({
          id: item.id,
          name: item.name,
          description: item.description,
          time: item.time
        })
      }
    })
    
  }

  onSubmit() {
    this.licenseService.editLicense(this.currentLicense, this.editLicenseForm.value).subscribe((data) => {
      this.location.back();
    })
  }


}
