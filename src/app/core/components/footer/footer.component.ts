import { Component } from '@angular/core';
import { EnvironmentService } from '../../services/environment.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public version!: number;

  constructor(private environmentService: EnvironmentService) {
    this.environmentService.version.subscribe((data) => (this.version = data));
  }
}
