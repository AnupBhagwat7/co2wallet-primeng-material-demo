import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcdListComponent } from './components/bcd-list/bcd-list.component';
import { AddBcdComponent } from './components/add-bcd/add-bcd.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NarComponent } from './components/bcd-section/nar/nar.component';
import { RecoveryStrategyComponent } from './components/bcd-section/recovery-strategy/recovery-strategy.component';
import { FunctionsComponent } from './components/bcd-section/functions/functions.component';
import { NarAddComponent } from './components/bcd-section/nar-add/nar-add.component';
import { NarEditComponent } from './components/bcd-section/nar-edit/nar-edit.component';
import { SubscibeComponent } from './components/subscibe/subscibe.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomepageComponent,
    children: [
      { path: 'bcd-list', component: BcdListComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'subscribe', component: SubscibeComponent },
      { path: 'landing-page', component: LandingPageComponent },
      {
        path: 'add-bcd',
        component: AddBcdComponent,
        children: [
          { path: 'nar', 
            component: NarComponent 
            /* children:[
              { path: 'nar-add', component: NarAddComponent },
              { path: 'nar-edit', component: NarEditComponent }
            ]  */       
          },
          
          { path: 'functions', component: FunctionsComponent },
          { path: 'recovery-strategy', component: RecoveryStrategyComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
//,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
