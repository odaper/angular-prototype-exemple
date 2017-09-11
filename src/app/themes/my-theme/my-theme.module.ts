import { MainComponent } from './../../business/pages/main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MyThemeComponent } from './my-theme.component';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule,
  MdSidenavModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../core/view/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdSidenavModule,
    MdIconModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
    MyThemeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent

  ],
  exports: [ MyThemeComponent ]
})
export class MyThemeModule { }
