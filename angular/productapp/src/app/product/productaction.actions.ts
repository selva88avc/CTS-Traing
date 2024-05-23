import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../model/product';

// export const ProductactionActions = createActionGroup({
//   source: 'Productaction',
//   events: {
     
//     'Get Products':props<{ products: Product[] }>(),
//     'Add To Cart': props<{product: Product}>(),
//   }
// });


export const addProuct = createAction('[Product] Add product', props<{ product: Product }>());
export const getProducts = createAction('[Prodcut] get Product', props<{products: Product[] }>());
