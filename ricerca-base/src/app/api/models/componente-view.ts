/* tslint:disable */
/* eslint-disable */
import { EntitaView } from './entita-view';
import {JsonNode} from "./json-node";
export interface ComponenteView {
  visibilita?: JsonNode;
  descrizione?: string;
  id?: number;
  listaEntita?: Array<EntitaView>;
  nome?: string;
}
