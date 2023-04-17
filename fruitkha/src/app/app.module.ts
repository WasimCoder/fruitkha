import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StyleDirective } from './directives/style.directive';
import { DisplayComponent } from './components/display/display.component';
import { ProductsComponent } from './components/products/products.component';
import { DealComponent } from './components/deal/deal.component';
import { ReviewComponent } from './components/review/review.component';
import { VideoComponent } from './components/video/video.component';
import { NewsComponent } from './components/news/news.component';
import { LogoComponent } from './components/logo/logo.component';
import { NgbModule , NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { TabnewsComponent } from './components/tabnews/tabnews.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { LoadComponent } from './components/load/load.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './components/shop/shop.component';
import { BtsearchComponent } from './components/btsearch/btsearch.component';
import { FruitsService } from './services/fruits.service';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StyleDirective,
    DisplayComponent,
    ProductsComponent,
    DealComponent,
    ReviewComponent,
    VideoComponent,
    NewsComponent,
    LogoComponent,
    AboutComponent,
    TeamComponent,
    TabnewsComponent,
    ContactComponent,
    CartComponent,
    LoadComponent,
    ShopComponent,
    BtsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
