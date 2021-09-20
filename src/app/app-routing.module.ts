import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:  'gerenciamento'  },

  {
    path: 'gerenciamento',
    loadChildren: () => import('./gerenciamento/gerenciamento.module').then(m => m.GerenciamentoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
