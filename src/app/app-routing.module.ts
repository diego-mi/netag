import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './components/common/layout/layout.component';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/pages/login/login.component';
import {PageSearchTableComponent} from './components/pages/page-search-table/page-search-table.component';

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
              {text: 'Nome do grupo'},
              {text: 'N° integrantes'},
              {text: 'Empresa Principal'},
              {text: 'CNPJ da Empresa Principal'},
              {text: 'Ação'},
            ],
            tbody: [
              {
                items: [
                  {text: 'Anna Scherer Milla'},
                  {text: '4'},
                  {text: 'Anna Scherer Milla'},
                  {text: '443.356.789-00'},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
              },
              {
                items: [
                  {text: 'Arysta Lifeschience do Brasil IND QUI. e AGROP. LTDA'},
                  {text: '1'},
                  {text: 'Arysta Lifeschience'},
                  {text: '451.123.444-22'},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
              },
              {
                items: [
                  {text: 'Barf SA'},
                  {text: '2'},
                  {text: 'Barf SA'},
                  {text: '557.449.265-11'},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
              },
              {
                items: [
                  {text: 'Cargill Agricola S.A.'},
                  {text: '5'},
                  {text: 'Cargill Agricola S.A.'},
                  {text: '654.876.913-33'},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
              },
            ]
          }
        }
      },
      {
        path: 'empresas',
        component: PageSearchTableComponent,
        data: {
          search: {
            searchAction: {
              title: 'Empresas Cadastradas',
              isLink: true,
              linkText: 'adicionar nova empresa'
            },
            searchForm: {
              title: 'Encontre uma empresa',
              inputs: [
                {
                  placeholder: 'nome / razao social',
                  type: 'text'
                }, {
                  placeholder: 'cpf / cnpj',
                  type: 'text'
                }, {
                  placeholder: 'nome fantasia',
                  type: 'text'
                }, {
                  placeholder: 'email',
                  type: 'text'
                }
              ]
            }
          },
          table: {
            thead: [
              {text: 'Nome / Razão Social'},
              {text: 'CPF / CNPJ'},
              {text: 'AG / GD'},
              {text: 'Nome Fantasia'},
              {text: 'Email'},
              {text: 'Ação'},
            ],
            tbody: [
              {
                items: [
                  {text: 'Anna Scherer Milla'},
                  {text: '443.356.789-00'},
                  {text: 'AG'},
                  {text: ''},
                  {text: ''},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
              },
              {
                items: [
                  {text: 'Arysta Lifeschience do Brasil IND QUI. e AGROP. LTDA'},
                  {text: '451.123.444-22'},
                  {text: 'CD'},
                  {text: 'Arysta Lifeschience'},
                  {text: 'wellida.santos@goldencargo.com.br'},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
              },
              {
                items: [
                  {text: 'Barf SA'},
                  {text: '557.449.265-11'},
                  {text: 'CD'},
                  {text: 'Barf SA'},
                  {text: 'barfsa@goldencargo.com.br'},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
              },
              {
                items: [
                  {text: 'Cargill Agricola S.A.'},
                  {text: '654.876.913-33'},
                  {text: 'CD'},
                  {text: 'Cargill Agricola S.A.'},
                  {text: 'danielli_coelho@cargil.com'},
                ],
                isSeparator: false,
              },
              {
                items: [],
                isSeparator: true,
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
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
