/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IdpAuthentication } from '../models/idp-authentication';
import { IdpOrganization } from '../models/idp-organization';
import { IdpRole } from '../models/idp-role';
import { IdpUser } from '../models/idp-user';


/**
 * Idp Resource
 */
@Injectable({
  providedIn: 'root',
})
export class IdpResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserInfo
   */
  static readonly GetUserInfoPath = '/idp';

  /**
   * getUserInfo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfo$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IdpAuthentication>> {

    const rb = new RequestBuilder(this.rootUrl, IdpResourceService.GetUserInfoPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IdpAuthentication>;
      })
    );
  }

  /**
   * getUserInfo.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfo(params?: {
  },
  context?: HttpContext

): Observable<IdpAuthentication> {

    return this.getUserInfo$Response(params,context).pipe(
      map((r: StrictHttpResponse<IdpAuthentication>) => r.body as IdpAuthentication)
    );
  }

  /**
   * Path part for operation getAllOrganizations
   */
  static readonly GetAllOrganizationsPath = '/idp/groups';

  /**
   * getAllOrganizations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllOrganizations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOrganizations$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<IdpOrganization>>> {

    const rb = new RequestBuilder(this.rootUrl, IdpResourceService.GetAllOrganizationsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IdpOrganization>>;
      })
    );
  }

  /**
   * getAllOrganizations.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllOrganizations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOrganizations(params?: {
  },
  context?: HttpContext

): Observable<Array<IdpOrganization>> {

    return this.getAllOrganizations$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<IdpOrganization>>) => r.body as Array<IdpOrganization>)
    );
  }

  /**
   * Path part for operation getAllRoles
   */
  static readonly GetAllRolesPath = '/idp/roles';

  /**
   * getAllRoles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRoles$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<IdpRole>>> {

    const rb = new RequestBuilder(this.rootUrl, IdpResourceService.GetAllRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IdpRole>>;
      })
    );
  }

  /**
   * getAllRoles.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRoles(params?: {
  },
  context?: HttpContext

): Observable<Array<IdpRole>> {

    return this.getAllRoles$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<IdpRole>>) => r.body as Array<IdpRole>)
    );
  }

  /**
   * Path part for operation getAllUsers
   */
  static readonly GetAllUsersPath = '/idp/users';

  /**
   * getAllUsers.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<IdpUser>>> {

    const rb = new RequestBuilder(this.rootUrl, IdpResourceService.GetAllUsersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IdpUser>>;
      })
    );
  }

  /**
   * getAllUsers.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: {
  },
  context?: HttpContext

): Observable<Array<IdpUser>> {

    return this.getAllUsers$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<IdpUser>>) => r.body as Array<IdpUser>)
    );
  }

}
