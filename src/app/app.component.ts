import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-mentoring';

  public loadingObs = this.loader.getLoadingObs();

  constructor(public authService: AuthService, private loader: LoadingService) {}
}
