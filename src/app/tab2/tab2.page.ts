import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { User } from 'firebase';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isSingleClick = true;
  myForm: FormGroup;
  submitted = false;
  users: User[] = [];

  public products: Product[];


  constructor(private service: ProductService, private router: Router) {
    this.service.getProducts().subscribe(data => {
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        } as Product;
      });
    });
  }


}
