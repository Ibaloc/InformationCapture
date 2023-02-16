import { NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarangayComponent } from './barangay/barangay.component';
import { MemberComponent } from './member/member.component';
import { ClassificationComponent } from './classification/classification.component';

import { UppercaseDirective } from './uppercase.directive';
import { LowercaseDirective } from './lowercase.directive';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    BarangayComponent,
    MemberComponent,
    ClassificationComponent,
    UppercaseDirective,
    LowercaseDirective,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
