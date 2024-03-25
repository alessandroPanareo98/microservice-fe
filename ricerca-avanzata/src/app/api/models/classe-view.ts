/* tslint:disable */
/* eslint-disable */
import { MetadatoView } from './metadato-view';
import { PolicyView } from './policy-view';
import { Visibilita } from './visibilita';
export interface ClasseView {
  creatoDa?: string;
  dataCreazione?: number;
  dataModifica?: number;
  descrizione?: string;
  id?: number;
  ordinamento: number;
  metadati?: Array<MetadatoView>;
  modificatoDa?: string;
  nome?: string;
  parentId?: number;
  policy?: Array<PolicyView>;
  visibilita?: Visibilita;
}
