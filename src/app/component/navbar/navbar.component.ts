import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private flowbiteService = inject(FlowbiteService);
  private isMobileMenuOpen= signal(false);
  private isDropDownOpen= signal(false);
  private dropdownElement: ElementRef;
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private elementRef: ElementRef){
    this.dropdownElement = elementRef;
  }

  /*
  @HostListener('document:click', ['$event'])
    clickOutside(event: Event) {}*/


  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

}
