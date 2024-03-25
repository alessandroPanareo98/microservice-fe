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

import { Resource } from '../models/resource';


/**
 * Resource Downloader Controller
 */
@Injectable({
  providedIn: 'root',
})
export class DownloadResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation download
   */
  static readonly DownloadPath = '/download';

  /**
   * download.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `download()` instead.
   *
   * This method doesn't expect any request body.
   */
  download$Response(params: {

    /**
     * filename
     */
    filename: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadResourceService.DownloadPath, 'get');
    if (params) {
      rb.query('filename', params.filename, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * download.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `download$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  download(params: {

    /**
     * filename
     */
    filename: string;
  },
  context?: HttpContext

): Observable<Blob> {
    return this.download$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
