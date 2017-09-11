import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule,
  MdSidenavModule, MdIconModule } from '@angular/material';
import { ComponentsModule } from './core/view/components/components.module';
import { PagesModule } from './business/pages/pages.module';
import 'hammerjs';
import { MyThemeModule } from './themes/my-theme/my-theme.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdSidenavModule,
    MdIconModule,
    ComponentsModule,
    PagesModule,
    MyThemeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
