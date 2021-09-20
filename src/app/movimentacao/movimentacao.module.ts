import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import { IncluirAcaoComponent } from './incluir-acao/incluir-acao.component';


@NgModule({
  declarations: [
    IncluirAcaoComponent
  ],
  imports: [
    CommonModule,
    MovimentacaoRoutingModule
  ]
})
export class MovimentacaoModule { }
