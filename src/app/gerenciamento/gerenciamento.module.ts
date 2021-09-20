import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciamentoRoutingModule } from './gerenciamento-routing.module';
import { InclusaoPlanoComponent } from './inclusao-plano/inclusao-plano.component';


@NgModule({
  declarations: [
    InclusaoPlanoComponent
  ],
  imports: [
    CommonModule,
    GerenciamentoRoutingModule
  ]
})
export class GerenciamentoModule { }
