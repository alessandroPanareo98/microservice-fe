/* tslint:disable */
/* eslint-disable */
import { JsonNode } from './json-node';
import { ValoreCampoView } from './valore-campo-view';
export interface DatasetView {
  creatoDa?: string;
  ordinamentoDataset?: number;
  ordine: number;
  dataCreazione?: number;
  dataModifica?: number;
  descrizione?: string;
  elencoCampi?: JsonNode;
  filtro?: JsonNode;
  id?: number;
  idComponente?: number;
  idEntita?: number;
  modificatoDa?: string;
  nome?: string;
  ordinamento?: JsonNode;
  raggruppamento?: string;
  storico?: boolean;
  valoreCampi?: Array<ValoreCampoView>;
}
