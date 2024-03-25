/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {PageFascicoloView} from '../models/page-fascicolo-view';
import {RicercaBaseDto} from '../models/ricerca-base-dto';
import {FascicoloDatasetView} from "../models/fascicolo-dataset-view";
import {RicercaAvanzataDto} from "../models/ricerca-avanzata-dto";


/**
 * Fascicolo Resource
 */
@Injectable({
  providedIn: 'root',
})
export class FascicoloResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation ricerca
   */
  static readonly RicercaPath = '/fascicoli';

  /**
   * ricerca.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ricerca()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ricerca$Response(params?: {
                     page?: number;
                     pageSize?: number;
                     sortField?: string;
                     sortDir?: string;
                     body?: RicercaBaseDto
                   },
                   context?: HttpContext
  ): Observable<StrictHttpResponse<PageFascicoloView>> {

    const rb = new RequestBuilder(this.rootUrl, FascicoloResourceService.RicercaPath, 'post');
    if (params) {
      rb.query('pageSize', params.pageSize, {"style": "form"});
      rb.query('page', params.page, {"style": "form"});
      rb.query('sortField', params.sortField, {"style": "form"});
      rb.query('sortDir', params.sortDir, {"style": "form"});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageFascicoloView>;
      })
    );
  }

  /**
   * ricerca.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ricerca$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ricerca(params?: {
            page?: number;
            pageSize?: number;
            sortField?: string;
            sortDir?: string;
            body?: RicercaBaseDto
          },
          context?: HttpContext
  ): Observable<PageFascicoloView> {

    return this.ricerca$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageFascicoloView>) => r.body as PageFascicoloView)
    );
  }

  /**
   * Path part for operation ricerca
   */
  static readonly RicercaAvanzataPath = '/fascicoli/avanzata';

  /**
   * ricerca.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ricerca()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ricercaAvanzata$Response(params?: {
                             page?: number;
                             pageSize?: number;
                             sortField?: string;
                             sortDir?: string;
                             body?: RicercaAvanzataDto
                           },
                           context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FascicoloResourceService.RicercaAvanzataPath, 'post');
    if (params) {
      rb.query('pageSize', params.pageSize, {"style": "form"});
      rb.query('page', params.page, {"style": "form"});
      rb.query('sortField', params.sortField, {"style": "form"});
      rb.query('sortDir', params.sortDir, {"style": "form"});
      rb.body(params.body, 'application/json');
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
   * ricercaAvanzata.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ricercaAvanzata$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ricercaAvanzata(params?: {
                    page?: number;
                    pageSize?: number;
                    sortField?: string;
                    sortDir?: string;
                    body?: RicercaAvanzataDto
                  },
                  context?: HttpContext
  ): Observable<any> {

    return this.ricercaAvanzata$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation export
   */
  static readonly ExportPath = '/fascicoli/export';

  /**
   * export.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `export()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  export$Response(params: {

                    /**
                     * format
                     */
                    format: string;

                    /**
                     * sortField
                     */
                    sortField?: string;

                    /**
                     * sortDir
                     */
                    sortDir?: string;
                    body?: RicercaBaseDto
                  },
                  context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FascicoloResourceService.ExportPath, 'post');
    if (params) {
      rb.query('format', params.format, {"style": "form"});
      rb.query('sortField', params.sortField, {"style": "form"});
      rb.query('sortDir', params.sortDir, {"style": "form"});
      rb.body(params.body, 'application/json');
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
   * export.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `export$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  export(params: {

           /**
            * format
            */
           format: string;

           /**
            * sortField
            */
           sortField?: string;

           /**
            * sortDir
            */
           sortDir?: string;
           body?: RicercaBaseDto
         },
         context?: HttpContext
  ): Observable<any> {

    return this.export$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getAllDatasetsByClasseId
   */
  static readonly GetAllDatasetsByClasseIdPath = '/fascicoli/classe/{id}/datasets';

  /**
   * getAllDatasetsByClasseId.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDatasetsByClasseId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDatasetsByClasseId$Response(params: {

                                      /**
                                       * id
                                       */
                                      id: number;
                                      /**
                                       * id
                                       */
                                      idOwner: string;
                                    },
                                    context?: HttpContext
  ): Observable<StrictHttpResponse<FascicoloDatasetView[]>> {

    const rb = new RequestBuilder(this.rootUrl, FascicoloResourceService.GetAllDatasetsByClasseIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style": "simple"});
    }

    if (params.idOwner)
      rb.query('idOwner', params.idOwner, {});

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<FascicoloDatasetView[]>) => {
        return r as StrictHttpResponse<FascicoloDatasetView[]>;
      })
    );
  }

  /**
   * getById.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllDatasetsByClasseId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDatasetsByClasseId(params: {

                             /**
                              * id
                              */
                             id: number;

                             /**
                              * id
                              */
                             idOwner: string;
                           },
                           context?: HttpContext
  ): Observable<FascicoloDatasetView[]> {

    return this.getAllDatasetsByClasseId$Response(params, context).pipe(
      map((r: StrictHttpResponse<FascicoloDatasetView[]>) => r.body as FascicoloDatasetView[])
    );
  }

  /**
   * Path part for operation getAllDatasetsByClasseId
   */
  static readonly ExportAllDatasetsByClasseIdPath = '/fascicoli/classe/{id}/export';

  /**
   * getAllDatasetsByClasseId.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDatasetsByClasseId()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAllDatasetsByClasseId$Response(params: {

                                         /**
                                          * id
                                          */
                                         id: number;
                                         format: string;
                                         /**
                                          * id
                                          */
                                         idOwner: string;
                                       },
                                       context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FascicoloResourceService.ExportAllDatasetsByClasseIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style": "simple"});
      rb.query('format', params.format, {"style": "form"});
    }

    if (params.idOwner)
      rb.query('idOwner', params.idOwner, {});

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<FascicoloDatasetView[]>) => {
        return r as StrictHttpResponse<FascicoloDatasetView[]>;
      })
    );
  }

  /**
   * getById.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportAllDatasetsByClasseId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportAllDatasetsByClasseId(params: {

                                /**
                                 * id
                                 */
                                id: number;

                                format: string;

                                /**
                                 * id
                                 */
                                idOwner: string;
                              },
                              context?: HttpContext
  ): Observable<any> {

    return this.exportAllDatasetsByClasseId$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getAllDatasetsByClasseId
   */
  static readonly ExportRicercaAvanzata = '/fascicoli/avanzata/export';

  /**
   * getAllDatasetsByClasseId.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDatasetsByClasseId()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportRicercaAvanzata$Response(params: {
                                   format: string;
                                   sortField?: string;
                                   sortDir?: string;
                                   body?: RicercaAvanzataDto
                                 },
                                 context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FascicoloResourceService.ExportRicercaAvanzata, 'post');
    if (params) {
      rb.query('format', params.format, {"style": "form"});
      rb.query('sortField', params.sortField, {"style": "form"});
      rb.query('sortDir', params.sortDir, {"style": "form"});
      rb.body(params.body, 'application/json');
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
   * getById.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exportAllDatasetsByClasseId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exportRicercaAvanzata(params: {
                          format: string;
                          sortField?: string;
                          sortDir?: string;
                          body?: RicercaAvanzataDto
                        },
                        context?: HttpContext
  ): Observable<any> {
    return this.exportRicercaAvanzata$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
