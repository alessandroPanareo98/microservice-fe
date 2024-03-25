/* tslint:disable */
/* eslint-disable */
import { EntitaDto } from './entita-dto';
import {JsonNode} from "./json-node";
export interface ComponenteDto {
  descrizione?: string;
  id?: number;
  listaEntita?: Array<EntitaDto>;
  nome: string;
  visibilita?: JsonNode;
}
