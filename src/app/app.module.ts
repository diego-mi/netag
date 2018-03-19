import { HomeIndustriaComponent } from './components/pages/home-industria/home-industria.component';
import { IndustriaRoutingModule } from './routes/industria-routing.module';
import { RevendaRoutingModule } from './routes/revenda-routing.module';
import { ProdutorRoutingModule } from './routes/produtor-routing.module';
import { MasterRoutingModule } from './routes/master-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SearchFormComponent } from './components/common/search-form/search-form.component';
import { TableComponent } from './components/common/table/table.component';
import { PageSearchTableComponent } from './components/pages/page-search-table/page-search-table.component';
import { HomeProdutorComponent } from './components/pages/home-produtor/home-produtor.component';
import { HomeRevendaComponent } from './components/pages/home-revenda/home-revenda.component';
import { HeaderRevendaComponent } from './components/common/header-revenda/header-revenda.component';
import { HeaderIndustriaComponent } from './components/common/header-industria/header-industria.component';
import { HeaderProdutorComponent } from './components/common/header-produtor/header-produtor.component';
import { LayoutProdutorComponent } from './components/common/layout-produtor/layout-produtor.component';
import { LayoutRevendaComponent } from './components/common/layout-revenda/layout-revenda.component';
import { LayoutIndustriaComponent } from './components/common/layout-industria/layout-industria.component';
import { MasterPageFiliaisComponent } from './components/pages/master/master-page-filiais/master-page-filiais.component';
import { MasterPageEmpresasComponent } from './components/pages/master/master-page-empresas/master-page-empresas.component';
import { MasterPageGruposComponent } from './components/pages/master/master-page-grupos/master-page-grupos.component';
import { MasterPageEmpresasFormComponent } from './components/pages/master/master-page-empresas-form/master-page-empresas-form.component';
import { MasterPageEmpresasEditComponent } from './components/pages/master/master-page-empresas-edit/master-page-empresas-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    HomeIndustriaComponent,
    HomeProdutorComponent,
    HomeRevendaComponent,
    LoginComponent,
    SearchFormComponent,
    TableComponent,
    PageSearchTableComponent,
    HomeProdutorComponent,
    HomeRevendaComponent,
    HeaderRevendaComponent,
    HeaderIndustriaComponent,
    HeaderProdutorComponent,
    LayoutProdutorComponent,
    LayoutRevendaComponent,
    LayoutIndustriaComponent,
    MasterPageFiliaisComponent,
    MasterPageEmpresasComponent,
    MasterPageGruposComponent,
    MasterPageEmpresasFormComponent,
    MasterPageEmpresasEditComponent
  ],
  imports: [
    BrowserModule,
    MasterRoutingModule,
    ProdutorRoutingModule,
    RevendaRoutingModule,
    IndustriaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
