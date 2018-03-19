import { MasterPageEmpresasEditComponent } from './../components/pages/master/master-page-empresas-edit/master-page-empresas-edit.component';
import { MasterPageEmpresasFormComponent } from './../components/pages/master/master-page-empresas-form/master-page-empresas-form.component';
import { MasterPageEmpresasComponent } from './../components/pages/master/master-page-empresas/master-page-empresas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './../components/common/layout/layout.component';
import { HomeComponent } from './../components/pages/home/home.component';
import { LoginComponent } from './../components/pages/login/login.component';
import { PageSearchTableComponent } from './../components/pages/page-search-table/page-search-table.component';

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
        path: 'estoque',
        component: PageSearchTableComponent,
        data: {
          search: {
            searchAction: {
              title: 'Consulta de Estoque',
              isLink: false,
              linkText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            },
            searchForm: {
              title: 'Buscando algo específico?',
              inputs: [
                {
                  placeholder: 'cnpj',
                  type: 'text'
                },
                {
                  placeholder: 'entrada',
                  type: 'text'
                },
                {
                  placeholder: 'código',
                  type: 'text'
                },
                {
                  placeholder: 'produto',
                  type: 'text'
                },
                {
                  placeholder: 'lote',
                  type: 'text'
                }
              ]
            }
          },
          table: {
            thead: [
              { text: 'Status' },
              { text: 'Filial & Código' },
              { text: 'Nome & Pagador' },
              { text: 'Nota Definitiva' },
              { text: 'Valor Total NF' },
              { text: 'Código Produto' },
              { text: 'Descrição Produto' },
              { text: 'Lote' },
              { text: 'Data Validade' },
              { text: 'Status Venc' },
              { text: 'Qnt. Bloq.' },
              { text: 'Qnt. Livre' },
              { text: 'Qnt. Total' },
              { text: 'Dias para Término AG' }
            ],
            tbody: [
              {
                items: [
                  {
                    text: 'Regular',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-blue',
                    textActionClass: 'td-first td-first--text-blue td-first--text-bold'
                  },
                  { text: 'Balsas SP 30' },
                  { text: 'Info Pagador' },
                  { text: '2170/1' },
                  { text: 'R$ 0.000,00' },
                  { text: '00000' },
                  { text: 'Descrição do produto' },
                  { text: '00000' },
                  { text: '00/00/0000' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: '161 dias' },
                ],
                isSeparator: false,
                actions: [],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Regular',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-yellow',
                    textActionClass: 'td-first td-first--text-yellow td-first--text-bold'
                  },
                  { text: 'Balsas SP 30' },
                  { text: 'Info Pagador' },
                  { text: '2170/1' },
                  { text: 'R$ 0.000,00' },
                  { text: '00000' },
                  { text: 'Descrição do produto' },
                  { text: '00000' },
                  { text: '00/00/0000' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: '161 dias' },
                ],
                isSeparator: false,
                actions: [],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Regular',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-red',
                    textActionClass: 'td-first td-first--text-red td-first--text-bold'
                  },
                  { text: 'Balsas SP 30' },
                  { text: 'Info Pagador' },
                  { text: '2170/1' },
                  { text: 'R$ 0.000,00' },
                  { text: '00000' },
                  { text: 'Descrição do produto' },
                  { text: '00000' },
                  { text: '00/00/0000' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: 'info' },
                  { text: '161 dias' },
                ],
                isSeparator: false,
                actions: [],
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
      {
        path: 'filiais',
        component: PageSearchTableComponent,
        data: {
          search: {
            searchAction: {
              title: 'Filiais Cadastradas',
              isLink: false,
              linkText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            },
            searchForm: {
              title: 'Encontre uma filial',
              inputs: [
                {
                  placeholder: 'nome da filial',
                  type: 'text'
                },
                {
                  placeholder: 'UF da filial',
                  type: 'text'
                },
                {
                  placeholder: 'código logix',
                  type: 'text'
                }
              ]
            }
          },
          table: {}
        }
      },
      {
        path: 'recebimento',
        component: PageSearchTableComponent,
        data: {
          search: {
            searchAction: {
              title: 'Consulta de Recebimentos',
              isLink: false,
              linkText: 'Lorem ipsum dolor sit \n' +
                'amet, consectetuer \n' +
                'adipiscing elit.'
            },
            searchForm: {
              title: 'Buscando algo específico?',
              inputs: [
                {
                  placeholder: 'cnpj',
                  type: 'text'
                }, {
                  placeholder: 'nota fiscal',
                  type: 'text'
                }, {
                  placeholder: 'código',
                  type: 'text'
                }, {
                  placeholder: 'lote',
                  type: 'text'
                }, {
                  placeholder: 'produto',
                  type: 'text'
                }, {
                  placeholder: 'data entrada',
                  type: 'text'
                }, {
                  placeholder: 'data conclusão',
                  type: 'text'
                }
              ]
            }
          },
          table: {
            thead: [
              { text: 'Filial & Código' },
              { text: 'Nome & CNPJ do pagador' },
              { text: 'Nota Origem' },
              { text: 'Qnt. Itens' },
              { text: 'Peso NF' },
              { text: 'Valor NF' },
              { text: 'Recebido em' },
              { text: 'Conferido em' },
              { text: 'Conclusão em' },
              { text: 'Nome Transportadora' },
            ],
            tbody: [
              {
                items: [
                  {
                    text: 'Balsas - SP 30',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: 'Anna Scherer Milla CPF 123.456.789-00' },
                  { text: '2170/1' },
                  { text: '500' },
                  { text: '100 kg' },
                  { text: 'R$ 0.000,00' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: 'Golden Cargo' }
                ],
                isSeparator: false,
                actions: [],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Balsas - SP 30',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: 'Anna Scherer Milla CPF 123.456.789-00' },
                  { text: '2170/1' },
                  { text: '500' },
                  { text: '100 kg' },
                  { text: 'R$ 0.000,00' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: 'Golden Cargo' }
                ],
                isSeparator: false,
                actions: [],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Balsas - SP 30',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: 'Anna Scherer Milla CPF 123.456.789-00' },
                  { text: '2170/1' },
                  { text: '500' },
                  { text: '100 kg' },
                  { text: 'R$ 0.000,00' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: 'Golden Cargo' }
                ],
                isSeparator: false,
                actions: [],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              },
              {
                items: [
                  {
                    text: 'Balsas - SP 30',
                    hasBtnAction: true,
                    btnActionClass: 'td-first--btn-green',
                    textActionClass: 'td-first td-first--text-normal'
                  },
                  { text: 'Anna Scherer Milla CPF 123.456.789-00' },
                  { text: '2170/1' },
                  { text: '500' },
                  { text: '100 kg' },
                  { text: 'R$ 0.000,00' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: '02/01/18' },
                  { text: 'Golden Cargo' }
                ],
                isSeparator: false,
                actions: [],
              },
              {
                items: [],
                isSeparator: true,
                actions: [],
              }
            ]
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {
}









