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

import {ClasseDto} from '../models/classe-dto';
import {ClasseView} from '../models/classe-view';
import {TreeClasseView} from '../models/tree-classe-view';


/**
 * Classe Resource
 */
@Injectable({
  providedIn: 'root',
})
export class ClasseResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createUsingPost
   */
  static readonly CreateUsingPostPath = '/classi';

  /**
   * create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUsingPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
                    body?: ClasseDto
                  },
                  context?: HttpContext
  ): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.CreateUsingPostPath, 'post');
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
   * To access the full response (for headers, for example), `createUsingPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params?: {
           body?: ClasseDto
         },
         context?: HttpContext
  ): Observable<number> {

    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }


  static readonly GetNomeByIdPath = '/classi/{id}/nome';

  getNomeById$Response(params: {
    id?: number
  }, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetNomeByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style": "simple"});
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


  getNomeById(id: any, context?: HttpContext): Observable<string> {
    return this.getNomeById$Response(id, context).pipe(
      map((r: HttpResponse<string>) => r.body as string) // Access the body from HttpResponse
    );
  }

  static readonly GetNomeByDatasetIdPath = '/classi/datasets/{id}/nomeClasse';

  getNomeByDatasetId$Response(params: { id: number }, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetNomeByDatasetIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style": "simple"});
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


  getNomeByDatasetId(id: any, context?: HttpContext): Observable<string> {
    return this.getNomeByDatasetId$Response(id, context).pipe(
      map((r: HttpResponse<string>) => r.body as string) // Access the body from HttpResponse
    );
  }


  static readonly GetClassePadrePath = '/classi/findClassName/{id}';

  getClassePadre$Response(id: any, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetClassePadrePath, 'get');
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


  static readonly GetModificaClassePadrePath = '/classi/findClassNameModify/{id}';

  getClasseNameModify$Response(id: any, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetModificaClassePadrePath, 'get');
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


  getClasseNameModify(id: any, context?: HttpContext): Observable<string> {
    return this.getClasseNameModify$Response(id, context).pipe(
      map((r: HttpResponse<string>) => r.body as string) // Access the body from HttpResponse
    );
  }

  /**
   * Path part for operation getConfigurationTree
   */
  static readonly GetConfigurationTreePath = '/classi/tree';

  /**
   * getConfigurationTree.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getConfigurationTree()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConfigurationTree$Response(params?: {},
                                context?: HttpContext
  ): Observable<StrictHttpResponse<TreeClasseView>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetConfigurationTreePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TreeClasseView>;
      })
    );
  }

  /**
   * getConfigurationTree.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getConfigurationTree$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConfigurationTree(params?: {},
                       context?: HttpContext
  ): Observable<TreeClasseView> {

    return this.getConfigurationTree$Response(params, context).pipe(
      map((r: StrictHttpResponse<TreeClasseView>) => r.body as TreeClasseView)
    );
  }

  /**
   * Path part for operation getConfigurationTreeUsingGet
   */
  static readonly GetTreeInfoDatasetsUsingGetPath = '/classi/tree/infodatasets';

  /**
   * getConfigurationTree.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTreeInfoDatasetse()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTreeInfoDatasets$Response(params?: {},
                               context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetTreeInfoDatasetsUsingGetPath, 'get');
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
   * getTreeInfoDatasetse.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTreeInfoDatasetseUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTreeInfoDatasets(params?: {},
                      context?: HttpContext
  ): Observable<any> {

    return this.getTreeInfoDatasets$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getConfigurationTree
   */
  static readonly GetClassTreePath = '/classi/tree/onlyclass';

  /**
   * getClassTree.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClassTree()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClassTree$Response(params?: {
                          idOwner: string;
                        },
                        context?: HttpContext
  ): Observable<StrictHttpResponse<TreeClasseView>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetClassTreePath, 'get');

    if (params?.idOwner)
      rb.query('idOwner', params?.idOwner, {});

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TreeClasseView>;
      })
    );
  }

  /**
   * getClassTree.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClassTree$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClassTree(params?: {
                 idOwner: string;
               },
               context?: HttpContext
  ): Observable<TreeClasseView> {

    return this.getClassTree$Response(params, context).pipe(
      map((r: StrictHttpResponse<TreeClasseView>) => r.body as TreeClasseView)
    );
  }

  /**
   * Path part for operation getById
   */
  static readonly GetByIdPath = '/classi/{id}';

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
  ): Observable<StrictHttpResponse<ClasseView>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetByIdPath, 'get');
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
        return r as StrictHttpResponse<ClasseView>;
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
  ): Observable<ClasseView> {

    return this.getById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClasseView>) => r.body as ClasseView)
    );
  }

  /**
   * Path part for operation update
   */
  static readonly UpdatePath = '/classi/{id}';

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
                    body?: ClasseDto
                  },
                  context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.UpdatePath, 'put');
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
           body?: ClasseDto
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
  static readonly DeleteByIdPath = '/classi/{id}';

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

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.DeleteByIdPath, 'delete');
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
   * Path part for operation disable
   */
  static readonly DisablePath = '/classi/{id}/changestate/disable';

  /**
   * changeDisableState$Response.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeDisableState()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeDisableState$Response(params: {

                                /**
                                 * id
                                 */
                                id: number;
                              },
                              context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.DisablePath, 'put');
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
   * changeDisableState.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeDisableState$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeDisableState(params: {

                       /**
                        * id
                        */
                       id: number;
                     },
                     context?: HttpContext
  ): Observable<void> {

    return this.changeDisableState$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation duplicateUsingPost
   */
  static readonly DuplicateUsingPostPath = '/classi/{id}/duplicate';

  /**
   * duplicate.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `duplicateUsingPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  duplicate$Response(params: {

                       /**
                        * id
                        */
                       id: number;
                     },
                     context?: HttpContext
  ): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.DuplicateUsingPostPath, 'post');
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
        return (r as HttpResponse<any>).clone({body: parseFloat(String((r as HttpResponse<any>).body))}) as StrictHttpResponse<number>;
      })
    );
  }


  /**
   * Path part for operation getOrdinamento
   */
  static readonly GetOrdinamentoPath = '/classi/{id}/ordinamento';

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

    const rb = new RequestBuilder(this.rootUrl, ClasseResourceService.GetOrdinamentoPath, 'get');
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


  /**
   * duplicate.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `duplicateUsingPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  duplicate(params: {

              /**
               * id
               */
              id: number;
            },
            context?: HttpContext
  ): Observable<number> {

    return this.duplicate$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
