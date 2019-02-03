import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppComponent}  from './app.component';
import {EmployeeService} from './employees/employeeservice';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule,ConfirmDialogModule,MultiSelectModule} from 'primeng/primeng';

@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule,ConfirmDialogModule,MultiSelectModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers:    [EmployeeService]
})
export class AppModule { }