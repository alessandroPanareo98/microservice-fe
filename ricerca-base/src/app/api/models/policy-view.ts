/* tslint:disable */
/* eslint-disable */
import { FunzionalitaView } from './funzionalita-view';
import { JsonNode } from './json-node';
export interface PolicyView {
  ereditaPadre?: boolean;
  funzionalita?: Array<FunzionalitaView>;
  id?: number;
  listaRisorse?: JsonNode;
  tipologia?: string;
}
