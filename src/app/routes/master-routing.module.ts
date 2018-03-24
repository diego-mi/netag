import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './../components/common/layout/layout.component';
import { HomeComponent } from './../components/pages/home/home.component';
import { LoginComponent } from './../components/pages/login/login.component';
import { PageSearchTableComponent } from './../components/pages/page-search-table/page-search-table.component';

import { MasterPageEmpresasEditComponent } from './../components/pages/master/master-page-empresas-edit/master-page-empresas-edit.component';
import { MasterPageEmpresasFormComponent } from './../components/pages/master/master-page-empresas-form/master-page-empresas-form.component';
import { MasterPageEmpresasComponent } from './../components/pages/master/master-page-empresas/master-page-empresas.component';

import { MasterPageGruposComponent } from './../components/pages/master/master-page-grupos/master-page-grupos.component';
import { MasterPageGruposEditComponent } from './../components/pages/master/master-page-grupos-edit/master-page-grupos-edit.component';
import { MasterPageGruposFormComponent } from './../components/pages/master/master-page-grupos-form/master-page-grupos-form.component';

import { MasterPageFiliaisComponent } from './../components/pages/master/master-page-filiais/master-page-filiais.component';
import { MasterPageFiliaisEditComponent } from './../components/pages/master/master-page-filiais-edit/master-page-filiais-edit.component';
import { MasterPageFiliaisFormComponent } from './../components/pages/master/master-page-filiais-form/master-page-filiais-form.component';

import { MasterPageEntregaComponent } from './../components/pages/master/master-page-entrega/master-page-entrega.component';
import { MasterPageEntregaEditComponent } from './../components/pages/master/master-page-entrega-edit/master-page-entrega-edit.component';
import { MasterPageEntregaFormComponent } from './../components/pages/master/master-page-entrega-form/master-page-entrega-form.component';

import { MasterPageEstoqueComponent } from './../components/pages/master/master-page-estoque/master-page-estoque.component';

import { MasterPageExpedicaoComponent } from './../components/pages/master/master-page-expedicao/master-page-expedicao.component';
import { MasterPageExpedicaoEditComponent } from './../components/pages/master/master-page-expedicao-edit/master-page-expedicao-edit.component';
import { MasterPageExpedicaoFormComponent } from './../components/pages/master/master-page-expedicao-form/master-page-expedicao-form.component';

import { MasterPageRecebimentoComponent } from './../components/pages/master/master-page-recebimento/master-page-recebimento.component';
import { MasterPageRecebimentoEditComponent } from './../components/pages/master/master-page-recebimento-edit/master-page-recebimento-edit.component';
import { MasterPageRecebimentoFormComponent } from './../components/pages/master/master-page-recebimento-form/master-page-recebimento-form.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'master',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'empresas',
        children: [
          {
            path: '',
            component: MasterPageEmpresasComponent
          },
          {
            path: 'cadastrar',
            component: MasterPageEmpresasFormComponent
          },
          {
            path: 'editar',
            component: MasterPageEmpresasEditComponent
          },
        ]
      },
      {
        path: 'grupos',
        children: [
          {
            path: '',
            component: MasterPageGruposComponent
          },
          {
            path: 'cadastrar',
            component: MasterPageGruposFormComponent
          },
          {
            path: 'editar',
            component: MasterPageGruposEditComponent
          },
        ]
      },
      {
        path: 'filiais',
        children: [
          {
            path: '',
            component: MasterPageFiliaisComponent
          },
          {
            path: 'cadastrar',
            component: MasterPageFiliaisFormComponent
          },
          {
            path: 'editar',
            component: MasterPageFiliaisEditComponent
          },
        ]
      },
      {
        path: 'recebimento',
        children: [
          {
            path: '',
            component: MasterPageRecebimentoComponent
          },
          {
            path: 'cadastrar',
            component: MasterPageRecebimentoFormComponent
          },
          {
            path: 'editar',
            component: MasterPageRecebimentoEditComponent
          },
        ]
      },
      {
        path: 'expedicao',
        children: [
          {
            path: '',
            component: MasterPageExpedicaoComponent
          },
          {
            path: 'cadastrar',
            component: MasterPageExpedicaoFormComponent
          },
          {
            path: 'editar',
            component: MasterPageExpedicaoEditComponent
          },
        ]
      },
      {
        path: 'estoque',
        children: [
          {
            path: '',
            component: MasterPageEstoqueComponent
          },
        ]
      },
      {
        path: 'entrega',
        children: [
          {
            path: '',
            component: MasterPageEntregaComponent
          },
          {
            path: 'cadastrar',
            component: MasterPageEntregaFormComponent
          },
          {
            path: 'editar',
            component: MasterPageEntregaEditComponent
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {
}









