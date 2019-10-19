import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() futureSelected = new EventEmitter<string>();

  title = 'Get It Free portal';
  photoURL = 'http://www.image123.net/thumbs/20191019/co73ugj5f9c1.jpg';

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
    });
  }

  hasSignedIn() {
    return !!this.userService.currentUser;
  }

  userName() {
    const user = this.userService.currentUser;
    return user.username;
  }

  karmaPoints() {
    return this.userService.currentUser.karma;
  }
}
