import { sendOrder } from '../request/request';
import { Product } from '../components/productCard/ProductCard';
interface Quantities {
  [productId: string]: number;
}


function createOrder(client: string, selectedProducts:Product[], quantities: Quantities) {
  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset() * 60000; // Get the time zone offset in milliseconds
  const localDate = new Date(currentDate.getTime() - timezoneOffset); // Adjust the date based on the time zone offset
  const formattedDate = localDate.toISOString().slice(0, 19).replace('T', ' ');
  const orden = {
    client: client,
    products: selectedProducts.map((item) => {
      return {
        qty: quantities[item.id] || 1,
        product: item,
      };
    }),
    status: "pending",
    dataEntry: formattedDate,
  };

  return sendOrder(orden)
}



export { createOrder } ;
