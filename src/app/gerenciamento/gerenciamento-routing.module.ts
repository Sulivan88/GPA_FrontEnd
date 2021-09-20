import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InclusaoPlanoComponent } from './inclusao-plano/inclusao-plano.component';

const routes: Routes = [
  { path: '', component:  InclusaoPlanoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciamentoRoutingModule { }
