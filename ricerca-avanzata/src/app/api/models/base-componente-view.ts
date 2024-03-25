/* tslint:disable */
/* eslint-disable */
import { BaseEntitaView } from './base-entita-view';
export interface BaseComponenteView {
  descrizione?: string;
  id?: number;
  listaEntita?: Array<BaseEntitaView>;
  nome?: string;
}
