import { createReducer, on } from '@ngrx/store';
import { Product } from '../model/product';
import * as ProductAction from './productaction.actions'
export const productreducerFeatureKey = 'productreducer';

export interface ProductState {
products : Product[];
}

export const initialState: ProductState = {
products : []
};

export const productreducer = createReducer(
  initialState,
  on(ProductAction.addProuct, (state, { product }) => ({...state, products: [...state.products, product] })),
  on(ProductAction.getProducts, (state, { products }) => ({ ...state, products:[...state.products], loading: true})),


);

