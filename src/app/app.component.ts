import { Component } from '@angular/core';
import { StarwarsService } from './services/starwars.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [StarwarsService]
})

export class AppComponent  { }
