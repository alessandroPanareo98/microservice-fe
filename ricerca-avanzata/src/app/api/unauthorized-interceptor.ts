import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {KeycloakService} from "keycloak-angular";
import {ModalService} from "../_services/modal.service";
import {ModalState, ModalType} from "../_models/status-modal-state";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(
    private keycloakService: KeycloakService,
    private modalService: ModalService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        this.modalService.updateState(new ModalState(true, ModalType.ERROR, "Utente non autorizzato ad utilizzare la risorsa. Verrai disconnesso", () => {
          this.keycloakService.logout(window.location.origin);
        }));
        return EMPTY;
      }else{
        const error = err.error || err.statusText;
        console.error(err);
        return throwError(() => error);
      }
    }))
  }
}
