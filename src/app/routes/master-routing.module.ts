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

import { MasterPageEstoqueComponent } from './../components/pages/master/master-page-estoque/master-page-estoque.component';

import { MasterPageExpedicaoComponent } from './../components/pages/master/master-page-expedicao/master-page-expedicao.component';

import { MasterPageRecebimentoComponent } from './../components/pages/master/master-page-recebimento/master-page-recebimento.component';
import { MasterPageSolicitacoesComponent } from '../components/pages/master/master-page-solicitacoes/master-page-solicitacoes.component';
import { MasterPagePerfilEditComponent } from '../components/pages/master/master-page-perfil-edit/master-page-perfil-edit.component';
import { MasterPageFaleConoscoComponent } from '../components/pages/master/master-page-fale-conosco/master-page-fale-conosco.component';
import {MasterPageNotificacoesComponent} from '../components/pages/master/master-page-notificacoes/master-page-notificacoes.component';
import {DatatableComponent} from '../components/pages/master/datatable/datatable.component';


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
        ]
      },
      {
        path: 'expedicao',
        children: [
          {
            path: '',
            component: MasterPageExpedicaoComponent
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
        ]
      },
      {
        path: 'solicitacoes',
        children: [
          {
            path: '',
            component: MasterPageSolicitacoesComponent
          },
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            component: MasterPagePerfilEditComponent
          },
        ]
      },
      {
        path: 'fale-conosco',
        children: [
          {
            path: '',
            component: MasterPageFaleConoscoComponent
          },
        ]
      },
      {
        path: 'notificacoes',
        children: [
          {
            path: '',
            component: MasterPageNotificacoesComponent
          },
        ]
      },
      {
        path: 'datatable',
        children: [
          {
            path: '',
            component: DatatableComponent
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









