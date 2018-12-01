import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CervejaListComponent } from './components/cerveja-list/cerveja-list.component';
import { SpaceCurrencyPipe } from './pipes/space-currency.pipe';
import { FiltroProcuraPipe } from './pipes/filtro-procura.pipe';
import { StarComponent } from './components/shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { CervejaDetalhesComponent } from './components/cerveja-detalhes/cerveja-detalhes.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CervejaFormDataComponent } from './components/cerveja-form-data/cerveja-form-data.component';
import { CervejaFormTemplateComponent } from './components/cerveja-form-template/cerveja-form-template.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { CervejaEditComponent } from './components/cerveja-edit/cerveja-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CervejaListComponent,
    SpaceCurrencyPipe,
    FiltroProcuraPipe,
    StarComponent,
    CervejaDetalhesComponent,
    WelcomeComponent,
    CervejaFormDataComponent,
    CervejaFormTemplateComponent,
    FormDebugComponent,
    CervejaEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cervejas', component: CervejaListComponent },
      { path: 'cervejas/template/incluir', component: CervejaFormTemplateComponent },
      { path: 'cervejas/data/incluir', component: CervejaFormDataComponent },
      { path: 'cervejas/detalhes/:id', component: CervejaDetalhesComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
