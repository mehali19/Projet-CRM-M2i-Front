import { Component } from '@angular/core';
import { EnvironmentService } from '../../services/environment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public version!: number;

  constructor(private environmentService: EnvironmentService) {
    this.environmentService.version.subscribe((data) => (this.version = data));
  }
}
