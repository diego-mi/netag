import { LayoutProdutorComponent } from './../components/common/layout-produtor/layout-produtor.component';
import { HomeProdutorComponent } from './../components/pages/home-produtor/home-produtor.component';
import { PageSearchTableComponent } from './../components/pages/page-search-table/page-search-table.component';
import { HomeComponent } from './../components/pages/home/home.component';
import { LayoutComponent } from './../components/common/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'produtor',
    component: LayoutProdutorComponent,
    children: [
      {
        path: '',
        component: HomeProdutorComponent
      },
      {
        path: 'grupos',
        component: PageSearchTableComponent,
        data: {
          search: {
            searchAction: {
              title: 'Grupos Cadastrados',
              isLink: true,
              linkText: 'criar novo grupo'
            },
            searchForm: {
              title: 'Encontre um grupo',
              inputs: [
                {
                  placeholder: 'nome do grupo',
                  type: 'text'
                }, {
                  placeholder: 'empresa principal',
                  type: 'text'
                }, {
                  placeholder: 'cnpj da empresa principal',
                  type: 'text'
                }, {
                  placeholder: 'empresa participante',
                  type: 'text'
                },
                {
                  placeholder: 'cnpj da empresa participante',
                  type: 'text'
                }
              ]
            }
          },
          table: {
            thead: [
              { text: 'Nome do grupo' },
              { text: 'N° integrantes' },
              { text: 'Empresa Principal' },
              { text: 'CNPJ da Empresa Principal' },
              { text: 'Ação' },
            ],
            tbody: [
              {
                items: [
                  {
                    text: 'Anna Scherer Milla',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: '4' },
                  { text: 'Anna Scherer Milla' },
                  { text: '443.356.789-00' },
                ],
                isSeparator: false,
                actions: [
                  {
                    classes: 'icon-edit action-edit table__td_action',
                    title: 'Editar'
                  },
                  {
                    classes: 'icon-delete action-delete table__td_action',
                    title: 'Remover'
                  }
                ],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Arysta Lifeschience do Brasil IND QUI. e AGROP. LTDA',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: '1' },
                  { text: 'Arysta Lifeschience' },
                  { text: '451.123.444-22' },
                ],
                isSeparator: false,
                actions: [
                  {
                    classes: 'icon-edit action-edit table__td_action',
                    title: 'Editar'
                  },
                  {
                    classes: 'icon-delete action-delete table__td_action',
                    title: 'Remover'
                  }
                ],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Barf SA',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: '2' },
                  { text: 'Barf SA' },
                  { text: '557.449.265-11' },
                ],
                isSeparator: false,
                actions: [
                  {
                    classes: 'icon-edit action-edit table__td_action',
                    title: 'Editar'
                  },
                  {
                    classes: 'icon-delete action-delete table__td_action',
                    title: 'Remover'
                  }
                ],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Cargill Agricola S.A.',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: '5' },
                  { text: 'Cargill Agricola S.A.' },
                  { text: '654.876.913-33' },
                ],
                isSeparator: false,
                actions: [
                  {
                    classes: 'icon-edit action-edit table__td_action',
                    title: 'Editar'
                  },
                  {
                    classes: 'icon-delete action-delete table__td_action',
                    title: 'Remover'
                  }
                ],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
            ]
          }
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProdutorRoutingModule { }
