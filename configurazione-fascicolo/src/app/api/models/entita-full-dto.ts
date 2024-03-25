/* tslint:disable */
/* eslint-disable */
import {JsonNode} from "./json-node";

export interface EntitaFullDto {
  componenteId: number;
  id?: number;
  jsonSchema: JsonNode;
  nome: string;
  suffissoTopic: string;
}
