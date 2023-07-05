import { sendOrder } from '../request/request';
import { Product } from '../components/productCard/ProductCard';
interface Quantities {
  [productId: string]: number;
}

function createOrder(client: string, selectedProducts:Product[], quantities: Quantities) {
  const orden = {
    client: client,
    products: selectedProducts.map((item) => {
      return {
        qty: quantities[item.id] || 1,
        product: item,
      };
    }),
    status: "pending",
    dataEntry: "2022-03-05 15:00",
  };

  return sendOrder(orden)
}



export { createOrder } ;


// import { sendOrder } from '../request/request'

// function createOrder(selectedProducts: string[], quantities: object) {
//     const orden = {
//         client: "Harry Potter",
//         products: selectedProducts.map((item) => {
//           return {
//             qty: quantities[item.id] || 1,
//             product: item,
//           };
//         }),
//         status: "pending",
//         dataEntry: "2022-03-05 15:00",
//       };

//     sendOrder(orden)
//   }

//   export default createOrder;