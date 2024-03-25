import { Component, OnInit } from '@angular/core';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Auth } from './shared/auth';
import { AuthService } from './shared/auth.service';
import { AclResourceService } from './api/services';
import { Console } from 'console';

@Component({
  selector: 'angular-sub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-sub';
  
  constructor(private authService: AuthService, private aclService: AclResourceService){}

  ngOnInit(): void {
    // this.aclService.getAll().subscribe({
    //   next: (value) => {console.log("ACL: ", value)},
    //   error: (err) => {console.log("error: ", err)}
    // });
  }
}
