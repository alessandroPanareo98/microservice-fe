/* tslint:disable */
/* eslint-disable */
import { AccessToken } from './access-token';
import { IdpOrganization } from './idp-organization';
import { IdpRole } from './idp-role';
export interface IdpAuthentication {
  accessToken?: AccessToken;
  organizations?: Array<IdpOrganization>;
  roles?: Array<IdpRole>;
  id?: string;
}
