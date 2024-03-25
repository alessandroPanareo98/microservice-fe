/* tslint:disable */
/* eslint-disable */
import { FascicoloView } from './fascicolo-view';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageFascicoloView {
  content?: Array<FascicoloView>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
