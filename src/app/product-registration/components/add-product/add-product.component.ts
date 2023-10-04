import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  isImageUploaded: boolean = false;
  Form!: FormGroup;
  url = '';
  avatarImage: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm() {
    this.Form = this.formBuilder.group({
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      stock_level: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  hasError = (controlName: string, errorName: string) => {
    return this.Form.controls[controlName].hasError(errorName);
  };

  lookUpComponent() {
    console.log(this.Form.value);
    this.router.navigate(['/inventory_management']);
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.Form.patchValue({
        image: event.target.files[0],
      });
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.isImageUploaded = true;
        this.url = event.target.result;
      };
    }
  }
}
