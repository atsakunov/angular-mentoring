import {
  Component, EventEmitter, Input, Output
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() logout = new EventEmitter();

  @Input() isAuthenticated = false;

  @Input() name = '';

  constructor() { }

  public logoutHandler() {
    this.logout.emit();
  }
}
