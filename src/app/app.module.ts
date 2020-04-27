import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';
import { OrderComponent } from './order/order.component';
import { HistoryComponent } from './history/history.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes=[
  { path: 'test', component:TestComponent},
  {path:'order',component:OrderComponent},
  {path:'history',component:HistoryComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    OrderComponent,
    HistoryComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
