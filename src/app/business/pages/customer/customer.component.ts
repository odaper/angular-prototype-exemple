import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  isClicked= false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
   // this.router.navigate()
    this.isClicked = true ;
  }
}
