import { LayoutRevendaComponent } from './../components/common/layout-revenda/layout-revenda.component';
import { HomeRevendaComponent } from './../components/pages/home-revenda/home-revenda.component';
import { PageSearchTableComponent } from './../components/pages/page-search-table/page-search-table.component';
import { HomeComponent } from './../components/pages/home/home.component';
import { LayoutComponent } from './../components/common/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'revenda',
    component: LayoutRevendaComponent,
    children: [
      {
        path: '',
        component: HomeRevendaComponent
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
        path: 'recebimento',
        component: PageSearchTableComponent,
        data: {
          search: {
            searchAction: {
              title: 'Consulta de Recebimentos',
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
                  placeholder: 'nota fiscal',
                  type: 'text'
                },
                {
                  placeholder: 'código',
                  type: 'text'
                },
                {
                  placeholder: 'lote',
                  type: 'text'
                },
                {
                  placeholder: 'produto',
                  type: 'text'
                },
                {
                  placeholder: 'data entrada',
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
        path: 'expedicao',
        component: PageSearchTableComponent,
        data: {
          search: {
            searchAction: {
              title: 'Consulta de Expedição',
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
                  placeholder: 'nota fiscal',
                  type: 'text'
                },
                {
                  placeholder: 'código',
                  type: 'text'
                },
                {
                  placeholder: 'lote',
                  type: 'text'
                },
                {
                  placeholder: 'descrição do item',
                  type: 'text'
                },
                {
                  placeholder: 'data entrada',
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
        path: 'entrega',
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RevendaRoutingModule { }
