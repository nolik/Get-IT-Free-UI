
import {delay, takeUntil} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {DisplayMessage} from '../shared/models/display-message';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  title = 'Sign up';
  form: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Notification message from received
   * form request or router
   */
  notification: DisplayMessage;

  returnUrl: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.route.params.pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe((params: DisplayMessage) => {
        this.notification = params;
      });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(12)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;

    this.authService.signup(this.form.value).pipe(
    // show me the animation
      delay(1000))
      .subscribe(data => {
          console.log(data);
          this.authService.login(this.form.value).subscribe(() => {
            // this.userService.getUserInfo().subscribe();
            console.log('signup complete');
          });
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.submitted = false;
          console.log('Sign up error' + JSON.stringify(error));
          this.notification = {msgType: 'error', msgBody: error['error'].errorMessage};
        });

  }


}
