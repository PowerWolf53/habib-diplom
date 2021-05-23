import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElipsesLayoutComponent } from './components/elipses-layout/elipses-layout.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './components/order/order.component';
import { AutoParkComponent } from './components/auto-park/auto-park.component';
import { ContactsLayoutComponent } from './components/contacts-layout/contacts-layout.component';
import { MapLayoutComponent } from './components/map-layout/map-layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ElipsesLayoutComponent,
    MainFrameComponent,
    HeaderComponent,
    OrderComponent,
    AutoParkComponent,
    ContactsLayoutComponent,
    MapLayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
