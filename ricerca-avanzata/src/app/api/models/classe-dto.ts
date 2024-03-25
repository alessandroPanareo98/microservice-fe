/* tslint:disable */
/* eslint-disable */
import { MetadatoDto } from './metadato-dto';
import { PolicyDto } from './policy-dto';
export interface ClasseDto {
  classeParentId: number;
  descrizione?: string;
  id?: number;
  metadati?: Array<MetadatoDto>;
  nome: string;
  ordinamento: number;
  policy: Array<PolicyDto>;
  visualizzaCreatoDa: boolean;
  visualizzaDataCreazione: boolean;
  visualizzaDataModifica: boolean;
  visualizzaDescrizione: boolean;
  visualizzaModificatoDa: boolean;
}
