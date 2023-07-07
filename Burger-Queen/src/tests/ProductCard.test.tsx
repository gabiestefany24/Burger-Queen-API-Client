import '@testing-library/jest-dom'
import { render, screen, waitFor} from '@testing-library/react';
import ProductCard, { ProductCardProps, /* Product */ } from '../components/productCard/ProductCard'


/* const testProducts: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: 'image-url',
      quantity: 1,
    },
  ]; */

jest.mock('../request/request', () => ({
    getProductData: jest.fn().mockResolvedValue([
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            image: 'image-url',
            quantity: 1,
        },
    ]),
}));

describe('ProductCard', () => {

    const mockProps: ProductCardProps = {
        onSelectProduct: jest.fn(),
        selectedProducts: [],
    };

    it('fetches products and renders them correctly', async () => {
        render(<ProductCard {...mockProps} />);

        await waitFor(() => {
            expect(screen.getByText('Product 1')).toBeInTheDocument()
        })
       
        screen.debug();
    });

});