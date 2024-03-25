/* tslint:disable */
/* eslint-disable */
import { JsonNode } from './json-node';
export interface PolicyDto {
  ereditaPadre: boolean;
  funzionalita: Array<number>;
  id?: number;
  listaRisorse: JsonNode;
  tipologia: string;
}
