import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StarsComponent} from './stars/stars.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from './stock/stock.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StockFilterPipe } from './stock/stock-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {SocketService} from './header/socket.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WordmeansComponent } from './dictionary/wordmeans/wordmeans.component';
import {WordmeansService} from './dictionary/wordmeans.service';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'wordmean', component: WordmeansComponent},
  {path: 'stock/:id', component: StockFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    WordmeansComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService, SocketService, WordmeansService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
