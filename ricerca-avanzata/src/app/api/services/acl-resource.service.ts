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

import { Acl } from '../models/acl';


/**
 * Acl Resource
 */
@Injectable({
  providedIn: 'root',
})
export class AclResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll
   */
  static readonly GetAllPath = '/acl';

  /**
   * getAll.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Acl>>> {

    const rb = new RequestBuilder(this.rootUrl, AclResourceService.GetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Acl>>;
      })
    );
  }

  /**
   * getAll.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params?: {
  },
  context?: HttpContext

): Observable<Array<Acl>> {

    return this.getAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Acl>>) => r.body as Array<Acl>)
    );
  }

  /**
   * Path part for operation getAll
   */
  static readonly ExportBasePath = '/acl/export';

  /**
   * getAll.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportBase$Response(params?: {
                  },
                  context?: HttpContext

  ): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AclResourceService.ExportBasePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * getAll.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportBase(params?: {
         },
         context?: HttpContext

  ): Observable<any> {
    return this.exportBase$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getAll
   */
  static readonly ExportAdvancedPath = '/acl/export/advanced';

  /**
   * getAll.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAdvanced$Response(params?: {
                      },
                      context?: HttpContext

  ): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, AclResourceService.ExportAdvancedPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * getAll.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAdvanced(params?: {
             },
             context?: HttpContext

  ): Observable<any> {
    return this.exportAdvanced$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
