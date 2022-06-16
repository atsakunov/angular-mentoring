import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICourse } from '../../../../core/interfaces/course.interface';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() logout = new EventEmitter();

  @Input() isAuthenticated = false;

  constructor() { }

  public logoutHandler() {
    this.logout.emit();
  }
}
