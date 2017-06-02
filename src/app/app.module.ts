import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './auth.guard';
import { StarwarsService } from './services/starwars.service';

import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, PlanetComponent, LoginComponent,SearchComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AuthGuard, StarwarsService ]
})
export class AppModule { }
