/* tslint:disable */
/* eslint-disable */
import { TreeDatasetView } from './tree-dataset-view';
import {PolicyView} from "./policy-view";
export interface TreeClasseView {
  classeChildren?: Array<TreeClasseView>;
  dataset?: Array<TreeDatasetView>;
  policy?: Array<PolicyView>;
  disabilitata?: boolean;
  id?: number;
  nome?: string;
}
