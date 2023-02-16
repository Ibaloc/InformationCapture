import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from "./member/member.component";
import { BarangayComponent } from "./barangay/barangay.component";
import { ClassificationComponent } from "./classification/classification.component";
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  { path: "member", component: MemberComponent },
  { path: "barangay", component: BarangayComponent },
  { path: "classification", component: ClassificationComponent },
  { path: "layouts", component: LayoutsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
