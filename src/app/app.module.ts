import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BcdListComponent } from './components/bcd-list/bcd-list.component';
import { AddBcdComponent } from './components/add-bcd/add-bcd.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomMaterialModule } from './material.module';
import { CustomPrimengModule } from './primeng.module';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AgGridModule } from 'ag-grid-angular';
import { NotifierModule ,NotifierOptions} from 'angular-notifier';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BcdDetailsComponent } from './components/bcd-section/bcd-details/bcd-details.component';
import { NarComponent } from './components/bcd-section/nar/nar.component';
import { FunctionsComponent } from './components/bcd-section/functions/functions.component';
import { RecoveryStrategyComponent } from './components/bcd-section/recovery-strategy/recovery-strategy.component';
import { RecstrategySectionComponent } from './components/bcd-section/recstrategy-section/recstrategy-section.component';
import { BiaSectionComponent } from './components/bcd-section/bia-section/bia-section.component';
import { FunctionService } from './services/function.service';
import { NarEditComponent } from './components/bcd-section/nar-edit/nar-edit.component';
import { NarAddComponent } from './components/bcd-section/nar-add/nar-add.component';
import { FunctionAddComponent } from './components/bcd-section/function-add/function-add.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SubscibeComponent } from './components/subscibe/subscibe.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'middle',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
	theme: 'material',
	behaviour: {
		autoHide: 5000,
		onClick: false,
		onMouseover: 'pauseAutoHide',
		showDismissButton: true,
		stacking: 4
	},
	animations: {
		enabled: true,
		show: {
			preset: 'slide',
			speed: 300,
			easing: 'ease'
		},
		hide: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
			offset: 50
		},
		shift: {
			speed: 300,
			easing: 'ease'
		},
		overlap: 150
	}
};

@NgModule({
  declarations: [
    AppComponent,
    BcdListComponent,
    AddBcdComponent,
    LoginComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    BcdDetailsComponent,
    NarComponent,
    FunctionsComponent,
    RecoveryStrategyComponent,
    RecstrategySectionComponent,
    BiaSectionComponent,
	NarEditComponent,
	NarAddComponent,
	FunctionAddComponent,
	UserProfileComponent,
	SubscibeComponent,
	LandingPageComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
		CustomMaterialModule,
		CustomPrimengModule,
    AgGridModule.withComponents(null),
    NotifierModule.withConfig( customNotifierOptions )  ,
		HttpClientModule
  ],
  providers: [AuthenticationServiceService, UserService, FunctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
