import { createProductCard } from './productCard.mjs';
import { shuffle } from './utils.mjs';

export function createMainPage(productList) {
  console.log(productList);
  let onSaleProducts = productList.filter(product => {
    return product.discountPercentage != 0;
  });
  onSaleProducts = shuffle(onSaleProducts).slice(0, 8);

  let newArrivalProducts = productList.slice(
    productList.length - 4,
    productList.length
  );

  createProductCard(newArrivalProducts, 'new arrivals');
  createProductCard(onSaleProducts, 'on sale');
}
