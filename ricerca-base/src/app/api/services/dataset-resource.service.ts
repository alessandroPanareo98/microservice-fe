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

import {DatasetDto} from '../models/dataset-dto';
import {DatasetView} from '../models/dataset-view';


/**
 * Dataset Resource
 */
@Injectable({
  providedIn: 'root',
})
export class DatasetResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation create
   */
  static readonly createPath = '/dataset';

  /**
   * create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
                    body?: DatasetDto
                  },
                  context?: HttpContext
  ): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetResourceService.createPath, 'post');
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
   * create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params?: {
           body?: DatasetDto
         },
         context?: HttpContext
  ): Observable<number> {

    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }


  static readonly GetClassePadrePath = '/classi/findDatasetName/{id}';

  getClassePadre$Response(id: any, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, DatasetResourceService.GetClassePadrePath, 'get');
    if (id !== null && id !== undefined) {
      rb.path('id', id, {style: 'simple'});
    }

    return this.http.request(rb.build({
      responseType: 'text', // Use 'text' responseType for string response
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>; // Cast to StrictHttpResponse<string>
      })
    );
  }


  getClassePadre(id: any, context?: HttpContext): Observable<string> {
    return this.getClassePadre$Response(id, context).pipe(
      map((r: HttpResponse<string>) => r.body as string) // Access the body from HttpResponse
    );
  }


  static readonly GetDatasetPadrePath = '/classi/findDatasetmodify/{id}';

  getDatasetmodify$Response(id: any, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, DatasetResourceService.GetDatasetPadrePath, 'get');
    if (id !== null && id !== undefined) {
      rb.path('id', id, {style: 'simple'});
    }

    return this.http.request(rb.build({
      responseType: 'text', // Use 'text' responseType for string response
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>; // Cast to StrictHttpResponse<string>
      })
    );
  }


  getDatasetmodify(id: any, context?: HttpContext): Observable<string> {
    return this.getDatasetmodify$Response(id, context).pipe(
      map((r: HttpResponse<string>) => r.body as string) // Access the body from HttpResponse
    );
  }

  /**
   * Path part for operation getById
   */
  static readonly getByIdPath = '/dataset/{id}';

  /**
   * getById.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: {

                     /**
                      * id
                      */
                     id: number;
                   },
                   context?: HttpContext
  ): Observable<StrictHttpResponse<DatasetView>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetResourceService.getByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style": "simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DatasetView>;
      })
    );
  }

  /**
   * getById.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: {

            /**
             * id
             */
            id: number;
          },
          context?: HttpContext
  ): Observable<DatasetView> {

    return this.getById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DatasetView>) => r.body as DatasetView)
    );
  }

  /**
   * Path part for operation update
   */
  static readonly updatePath = '/dataset/{id}';

  /**
   * update.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: {

                    /**
                     * id
                     */
                    id: number;
                    body?: DatasetDto
                  },
                  context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetResourceService.updatePath, 'put');
    if (params) {
      rb.path('id', params.id, {"style": "simple"});
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
   * update.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: {

           /**
            * id
            */
           id: number;
           body?: DatasetDto
         },
         context?: HttpContext
  ): Observable<void> {

    return this.update$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteById
   */
  static readonly deleteByIdPath = '/dataset/{id}';

  /**
   * deleteById.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {

                        /**
                         * id
                         */
                        id: number;
                      },
                      context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetResourceService.deleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {"style": "simple"});
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
   * deleteById.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: {

               /**
                * id
                */
               id: number;
             },
             context?: HttpContext
  ): Observable<void> {

    return this.deleteById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }


  /**
   * Path part for operation getOrdinamento
   */
  static readonly GetOrdinamentoPath = '/dataset/{id}/ordinamento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrdinamento()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrdinamento$Response(params: {
                            id: number;
                          },
                          context?: HttpContext
  ): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DatasetResourceService.GetOrdinamentoPath, 'get');
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
        return (r as HttpResponse<any>).clone({body: parseFloat(String((r as HttpResponse<any>).body))}) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrdinamento$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrdinamento(params: {
                   id: number;
                 },
                 context?: HttpContext
  ): Observable<number> {

    return this.getOrdinamento$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }
}
