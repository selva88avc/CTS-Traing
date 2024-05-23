import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './productreducer.reducer';

//export const addProductState = createFeatureSelector<ProductState>('products');

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
  selectProductState,
    sta => sta.products
  );
 

 



// // Select the loading property
// export const selectLoading = createSelector(
//   selectProductState,
//   (state) => state.products
// );
 
