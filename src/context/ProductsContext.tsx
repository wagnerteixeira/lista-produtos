import { IProduct } from '../components/types';

import createCtx from './createCtx';

const products : Array<IProduct> = [
    {code: '1', description: 'Produto 1', price: 1 },
    {code: '2', description: 'Produto 2', price: 3 },
    {code: '3', description: 'Produto 3', price: 4 },
  ]
  
  const cart : Array<IProduct> = [
    {code: '4', description: 'Produto 4', price: 10 }  
  ]

let total = cart.reduce((prev, cur) => prev + cur.price, 0);

const [ctx, Provider] = createCtx({listCart: cart, listProduct: products, total: total});

export const ProductsProvider = Provider;
export const ProductsContext = ctx;
