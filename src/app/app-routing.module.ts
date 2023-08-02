import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path:'refund', component:RefundComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'aigf',
        component: AigfComponent
      },
      {
        path: 'fairplay',
        component: FairplayComponent
      },
      {
        path: 'cookies',
        component: CookiesComponent
      },
      {
        path: 'grievance',
        component: GrievanceComponent
      },
      {
        path: 'tds',
        component: TdsComponent
      },



    ]
  },


  {
    path: '**',
    redirectTo: 'home'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
