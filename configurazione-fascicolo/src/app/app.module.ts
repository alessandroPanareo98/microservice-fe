import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Auth } from './shared/auth';
import { AuthService } from './shared/auth.service';
import { OmponenteunoComponent } from './omponenteuno/omponenteuno.component';
import { OmponentedueComponent } from './omponentedue/omponentedue.component';



@NgModule({
  declarations: [
    AppComponent,
    OmponenteunoComponent,
    OmponentedueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
