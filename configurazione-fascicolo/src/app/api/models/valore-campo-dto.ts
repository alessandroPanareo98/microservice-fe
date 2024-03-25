/* tslint:disable */
/* eslint-disable */
import { JsonNode } from './json-node';
export interface ValoreCampoDto {
  id?: number;
  nomeCampo?: string;
  valoreMancante?: string;
  valoreNorma?: number;
  valoriDiscretizzati?: JsonNode;
}
