/* tslint:disable */
/* eslint-disable */
import { BaseComponenteView } from './base-componente-view';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageBaseComponenteView {
  content?: Array<BaseComponenteView>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
