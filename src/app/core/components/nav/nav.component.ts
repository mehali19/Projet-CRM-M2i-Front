import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EnvironmentService } from '../../services/environment.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public version!: number;
  public newVersion: BehaviorSubject<any>;

  constructor(private environmentService: EnvironmentService) {
    this.environmentService.version.subscribe((data) => (this.version = data));
    this.newVersion = environmentService.version;
  }

  public incrementVersion(): void {
    this.version++;
    this.newVersion.next(this.version);
  }
}
