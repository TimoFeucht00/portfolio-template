import {Component, inject} from '@angular/core';
import {RouterService} from '../../app/services/router.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  private routerService = inject(RouterService);


  protected navigateToHome() {
    this.routerService.navigateToHome();
  }

  protected navigateToProjects() {
    this.routerService.navigateToProjects();
  }

  protected navigateToAbout() {
    this.routerService.navigateToAbout();
  }

  protected navigateToCV() {
    this.routerService.navigateToCV();
  }

  protected navigateToContact() {
    this.routerService.navigateToContact();
  }

  protected navigateToSettings() {
    this.routerService.navigateToSettings();
  }

}
