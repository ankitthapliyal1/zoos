import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ResponsiblegamingComponent } from './pages/responsiblegaming/responsiblegaming.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AigfComponent } from './pages/aigf/aigf.component';
import { FairplayComponent } from './pages/fairplay/fairplay.component';
import { IpComponent } from './pages/ip/ip.component';
import { GrievanceComponent } from './pages/grievance/grievance.component';
import { TdsComponent } from './pages/tds/tds.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { RefundComponent } from './pages/refund/refund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    LayoutComponent,
    AboutusComponent,
    ResponsiblegamingComponent,
    TermsComponent,
    PrivacyComponent,
    AigfComponent,
    FairplayComponent,
    IpComponent,
    GrievanceComponent,
    TdsComponent,
    CookiesComponent,
    RefundComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
