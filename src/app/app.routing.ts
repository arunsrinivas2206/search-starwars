import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './auth.guard';

const appRoutes:Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'search',
		component: SearchComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		redirectTo: '' 
	}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);