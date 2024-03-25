/* tslint:disable */
/* eslint-disable */
import { JsonNode } from './json-node';
import { ValoreCampoDto } from './valore-campo-dto';
export interface DatasetDto {
  classeParentId: number;
  ordinamentoDataset?: number;
  descrizione?: string;
  elencoCampi: JsonNode;
  filtro?: JsonNode;
  id?: number;
  idComponente: number;
  idEntita: number;
  nome: string;
  ordinamento?: JsonNode;
  raggruppamento?: string;
  storico: boolean;
  valoreCampi?: Array<ValoreCampoDto>;
}
