import { Component, OnInit } from '@angular/core';
import { AclResourceService } from './api/services';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'ricercaavanzata-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ricercaavanzata';
  
  constructor(private authService: AuthService, private aclService: AclResourceService){}

  ngOnInit(): void {
    // this.aclService.getAll().subscribe({
    //   next: (value) => {console.log("ACL: ", value)},
    //   error: (err) => {console.log("error: ", err)}
    // });
  }
}
