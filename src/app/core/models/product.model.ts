import {Item} from "./item.model";

export interface Product {
  id: number,
  rubro_id: number,
  nombre: string,
  codigo: string,
  precio: number,
  created_at: string,
  updated_at: string,
  deleted_at: null | string,
  numero: number,
  rubro?: Item;
}
