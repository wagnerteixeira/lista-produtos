import React, {useContext, useReducer, createContext} from 'react';

import { IProduct } from '../components/types';

export const initialState = {
  listProduct: [
    { code: '1', description: 'Produto 1', price: 1 },
    { code: '2', description: 'Produto 2', price: 3 },
    { code: '3', description: 'Produto 3', price: 4 },
  ],
  listCart: [{ code: '4', description: 'Produto 4', price: 10 }],
  total: 10,
};

export type ProductState = typeof initialState;

type Action =
  | { type: 'ADD_TO_CART'; payload: IProduct }
  | { type: 'REMOVE_TO_CART'; payload: IProduct };

let reducer = (state: ProductState, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        listCart: [...state.listCart, action.payload],
        listProduct: state.listProduct.filter(
          p => p.code !== action.payload.code
        ),
        total: [...state.listCart, action.payload].reduce(
          (prev: number, cur: IProduct) => prev + cur.price,
          0
        ),
      };
    case 'REMOVE_TO_CART':
      return {
        listCart: state.listCart.filter(p => p.code !== action.payload.code),
        listProduct: [...state.listProduct, action.payload],
        total: state.listCart
          .filter(p => p.code !== action.payload.code)
          .reduce((prev: number, cur: IProduct) => prev + cur.price, 0),
      };
    default:
      throw new Error();
  }
};

const stateCtx = createContext(initialState);
const dispatchCtx = createContext((() => 0) as React.Dispatch<Action>);

export const ProductsProvider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>
        {children}
      </stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useProductsDispatch = () => useContext(dispatchCtx);
export const useProductsState = () => useContext(stateCtx);