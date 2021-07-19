import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastComponent } from './last/last.component';

const routes: Routes = [
  {path:'last', component:LastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
