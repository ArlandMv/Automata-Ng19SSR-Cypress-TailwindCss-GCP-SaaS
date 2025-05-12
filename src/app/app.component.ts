import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { HeroComponent } from "./component/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent], //RouterOutlet
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'automation-ai-services';
  private flowbiteService = inject(FlowbiteService);
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

}
