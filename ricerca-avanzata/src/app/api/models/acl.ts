/* tslint:disable */
/* eslint-disable */
import { JsonNode } from './json-node';
export interface Acl {
  id?: number;
  method?: string;
  path?: string;
  roles?: JsonNode;
  type?: string;
}
