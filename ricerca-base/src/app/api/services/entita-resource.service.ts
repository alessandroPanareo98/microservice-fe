/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpContext} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

import {EntitaFullDto} from '../models/entita-full-dto';
import {EntitaFullView} from '../models/entita-full-view';
import {ValidateJsonSchemaRequest} from "../models/validate-json-schema-request";
import {ValidateJsonSchemaResponse} from "../models/validate-json-schema-response";

@Injectable({
  providedIn: 'root',
})
export class EntitaResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getEntita
   */
  static readonly GetEntitaPath = '/entita/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEntita()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEntita$Response(params: {
                       id: number;
                     },
                     context?: HttpContext
  ): Observable<StrictHttpResponse<EntitaFullView>> {

    const rb = new RequestBuilder(this.rootUrl, EntitaResourceService.GetEntitaPath, 'get');
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
        return r as StrictHttpResponse<EntitaFullView>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEntita$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEntita(params: {
              id: number;
            },
            context?: HttpContext
  ): Observable<EntitaFullView> {

    return this.getEntita$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntitaFullView>) => r.body as EntitaFullView)
    );
  }

  /**
   * Path part for operation updateEntita
   */
  static readonly UpdateEntitaPath = '/entita/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEntita()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEntita$Response(params: {
                          id: number;
                          body: EntitaFullDto
                        },
                        context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntitaResourceService.UpdateEntitaPath, 'put');
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
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEntita$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEntita(params: {
                 id: number;
                 body: EntitaFullDto
               },
               context?: HttpContext
  ): Observable<void> {

    return this.updateEntita$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteEntita
   */
  static readonly DeleteEntitaPath = '/entita/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEntita()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEntita$Response(params: {
                          id: number;
                        },
                        context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntitaResourceService.DeleteEntitaPath, 'delete');
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
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEntita$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEntita(params: {
                 id: number;
               },
               context?: HttpContext
  ): Observable<void> {

    return this.deleteEntita$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getAllEntita
   */
  static readonly GetAllEntitaPath = '/entita';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllEntita()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEntita$Response(params?: {},
                        context?: HttpContext
  ): Observable<StrictHttpResponse<Array<EntitaFullView>>> {

    const rb = new RequestBuilder(this.rootUrl, EntitaResourceService.GetAllEntitaPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EntitaFullView>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllEntita$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEntita(params?: {},
               context?: HttpContext
  ): Observable<Array<EntitaFullView>> {

    return this.getAllEntita$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EntitaFullView>>) => r.body as Array<EntitaFullView>)
    );
  }

  /**
   * Path part for operation createEntita
   */
  static readonly CreateEntitaPath = '/entita';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEntita()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEntita$Response(params: {
                          body: EntitaFullDto
                        },
                        context?: HttpContext
  ): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, EntitaResourceService.CreateEntitaPath, 'post');
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
        return (r as HttpResponse<any>).clone({body: parseFloat(String((r as HttpResponse<any>).body))}) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEntita$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEntita(params: {
                 body: EntitaFullDto
               },
               context?: HttpContext
  ): Observable<number> {

    return this.createEntita$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation createEntita
   */
  static readonly ValidateJsonSchemaPath = '/entita/validate/jsonschema';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEntita()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateJsonSchema$Response(params: {
                                body: ValidateJsonSchemaRequest
                              },
                              context?: HttpContext
  ): Observable<StrictHttpResponse<ValidateJsonSchemaResponse>> {

    const rb = new RequestBuilder(this.rootUrl, EntitaResourceService.ValidateJsonSchemaPath, 'post');
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
        return r as StrictHttpResponse<ValidateJsonSchemaResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEntita$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateJsonSchema(params: {
                       body: ValidateJsonSchemaRequest
                     },
                     context?: HttpContext
  ): Observable<ValidateJsonSchemaResponse> {
    return this.validateJsonSchema$Response(params, context).pipe(
      map((r: StrictHttpResponse<ValidateJsonSchemaResponse>) => r.body as ValidateJsonSchemaResponse)
    );
  }

}
