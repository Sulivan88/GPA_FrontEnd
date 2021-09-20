import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracaoRoutingModule } from './configuracao-routing.module';
import { PerfilAcessosComponent } from './perfil-acessos/perfil-acessos.component';


@NgModule({
  declarations: [
    PerfilAcessosComponent
  ],
  imports: [
    CommonModule,
    ConfiguracaoRoutingModule
  ]
})
export class ConfiguracaoModule { }
