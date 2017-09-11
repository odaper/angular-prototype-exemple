import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesRoutingModule } from './pages-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { MyThemeModule } from '../../themes/my-theme/my-theme.module';

import {CdkColumnDef, CdkTable, CdkTableModule} from '@angular/cdk';
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSidenavModule, MdInputModule,
  MdDatepickerModule, MdRadioModule, MdNativeDateModule, MdSlideToggleModule, MdCheckboxModule, MdAutocompleteModule,
  MdTableModule, MdSelectModule, MaterialModule, MdPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MyThemeModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdInputModule,
    MdDatepickerModule,
    MdRadioModule,
    MdNativeDateModule,
    FormsModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    MdTableModule,
    CdkTableModule,
    MdPaginatorModule,
    MdMenuModule,
  ],
  providers: [CdkColumnDef, CdkTable],
  declarations: [
    CustomerComponent, ProductComponent, MainComponent ],
  exports: [MainComponent] 
})
export class PagesModule { }
