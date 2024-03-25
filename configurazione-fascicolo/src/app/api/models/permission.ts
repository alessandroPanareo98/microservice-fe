/* tslint:disable */
/* eslint-disable */
export interface Permission {
  claims?: {
[key: string]: Array<string>;
};
  rsid?: string;
  rsname?: string;
  scopes?: Array<string>;
}
