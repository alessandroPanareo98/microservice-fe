/* tslint:disable */
/* eslint-disable */
import { Access } from './access';
import { AddressClaimSet } from './address-claim-set';
import { Authorization } from './authorization';
import { CertConf } from './cert-conf';
export interface AccessToken {
  acr?: string;
  address?: AddressClaimSet;
  'allowed-origins'?: Array<string>;
  at_hash?: string;
  aud?: Array<string>;
  auth_time?: number;
  authorization?: Authorization;
  azp?: string;
  birthdate?: string;
  c_hash?: string;
  claims_locales?: string;
  cnf?: CertConf;
  email?: string;
  email_verified?: boolean;
  exp?: number;
  family_name?: string;
  gender?: string;
  given_name?: string;
  iat?: number;
  iss?: string;
  jti?: string;
  locale?: string;
  middle_name?: string;
  name?: string;
  nbf?: number;
  nickname?: string;
  nonce?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  picture?: string;
  preferred_username?: string;
  profile?: string;
  realm_access?: Access;
  resource_access?: {
[key: string]: Access;
};
  s_hash?: string;
  scope?: string;
  session_state?: string;
  sid?: string;
  sub?: string;
  'trusted-certs'?: Array<string>;
  typ?: string;
  updated_at?: number;
  website?: string;
  zoneinfo?: string;
}
