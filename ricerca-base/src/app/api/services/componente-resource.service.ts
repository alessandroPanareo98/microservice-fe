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

import { ComponenteDto } from '../models/componente-dto';
import { ComponenteView } from '../models/componente-view';
import { PageBaseComponenteView } from '../models/page-base-componente-view';
import { Pageable } from '../models/pageable';

@Injectable({
  providedIn: 'root',
})
export class ComponenteResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getComponente
   */
  static readonly GetComponentePath = '/componenti/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getComponente()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComponente$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ComponenteView>> {

    const rb = new RequestBuilder(this.rootUrl, ComponenteResourceService.GetComponentePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ComponenteView>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getComponente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComponente(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ComponenteView> {

    return this.getComponente$Response(params,context).pipe(
      map((r: StrictHttpResponse<ComponenteView>) => r.body as ComponenteView)
    );
  }

  /**
   * Path part for operation updateComponente
   */
  static readonly UpdateComponentePath = '/componenti/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateComponente()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateComponente$Response(params: {
    id: number;
    body: ComponenteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ComponenteResourceService.UpdateComponentePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateComponente$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateComponente(params: {
    id: number;
    body: ComponenteDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updateComponente$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteComponente
   */
  static readonly DeleteComponentePath = '/componenti/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComponente()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComponente$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ComponenteResourceService.DeleteComponentePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComponente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComponente(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteComponente$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllComponenti
   */
  static readonly GetAllComponentiPath = '/componenti';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllComponenti()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComponenti$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ComponenteView>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponenteResourceService.GetAllComponentiPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ComponenteView>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllComponenti$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComponenti(params?: {
  },
  context?: HttpContext

): Observable<Array<ComponenteView>> {

    return this.getAllComponenti$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ComponenteView>>) => r.body as Array<ComponenteView>)
    );
  }

  /**
   * Path part for operation getAllComponenti
   */
  static readonly getAllComponentiUsingIdpPath = '/componenti/idp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllComponenti()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComponentiUsingIdp$Response(params?: {
                            },
                            context?: HttpContext

  ): Observable<StrictHttpResponse<Array<ComponenteView>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponenteResourceService.getAllComponentiUsingIdpPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ComponenteView>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllComponentiUsingIdp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComponentiUsingIdp(params?: {
                   },
                   context?: HttpContext

  ): Observable<Array<ComponenteView>> {

    return this.getAllComponentiUsingIdp$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ComponenteView>>) => r.body as Array<ComponenteView>)
    );
  }

  /**
   * Path part for operation createComponente
   */
  static readonly CreateComponentePath = '/componenti';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createComponente()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComponente$Response(params: {
    body: ComponenteDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ComponenteResourceService.CreateComponentePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createComponente$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComponente(params: {
    body: ComponenteDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createComponente$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getAllComponenti1
   */
  static readonly GetAllComponenti1Path = '/componenti/view';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllComponenti1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComponentiView$Response(params?: {
    nomeComponente?: string;
    nomeEntita?: string;
    pageable?: Pageable;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageBaseComponenteView>> {

    const rb = new RequestBuilder(this.rootUrl, ComponenteResourceService.GetAllComponenti1Path, 'get');
    if (params) {
      if(params.nomeComponente)
        rb.query('nomeComponente', params.nomeComponente, {});

      if(params.nomeEntita)
        rb.query('nomeEntita', params.nomeEntita, {});

      rb.query('pageable', params.pageable, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageBaseComponenteView>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllComponenti1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllComponentiView(params?: {
    nomeComponente?: string;
    nomeEntita?: string;
    pageable?: Pageable;
  },
  context?: HttpContext

): Observable<PageBaseComponenteView> {

    return this.getAllComponentiView$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageBaseComponenteView>) => r.body as PageBaseComponenteView)
    );
  }

}
