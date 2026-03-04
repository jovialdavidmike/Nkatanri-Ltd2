export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  specs: string[];
}

export interface Incoterm {
  code: string;
  name: string;
  description: string;
  responsibility: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}