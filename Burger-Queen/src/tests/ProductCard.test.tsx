import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import ProductCard, { ProductCardProps } from '../components/productCard/ProductCard';
jest.mock('../request/request', () => ({
    getProductData: jest.fn().mockResolvedValue([
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            image: 'image-url',
            type: 'desayuno',
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
            expect(screen.getByTestId('product_test_1')).toBeInTheDocument();
            expect(screen.getByText('Product 1')).toBeInTheDocument();
            expect(screen.getByText('$10')).toBeInTheDocument();
        })
       
        //screen.debug();
    });

    it('renders the correct styles and handles click correctly', async () => {
       
        render(<ProductCard {...mockProps} />);
    
        await waitFor (() => {
            const productElement = screen.getByTestId("product_test_1");
            expect(productElement).toHaveAttribute('data-testid', 'product_test_1');
            expect(productElement).not.toHaveClass("disabled");
            fireEvent.click(productElement);
            expect(mockProps.onSelectProduct).toHaveBeenCalledWith(
                {
                    id: 1,
                    name: 'Product 1',
                    price: 10,
                    image: 'image-url',
                    type: 'desayuno',
                    quantity: 1,
                },
            );
            
        })
      });

      
    it('renders the correct styles and handles click correctly', async () => {
        const mockProps: ProductCardProps = {
            onSelectProduct: jest.fn(),
            selectedProducts: [
              {
                id: 1,
                name: 'Selected Product 1',
                price: 10,
                image: 'image-url',
                type: 'desayuno',
                quantity: 1,
              },
            ],
          };
        render(<ProductCard {...mockProps} />);
    
        await waitFor (() => {
            const productElement = screen.getByTestId("product_test_1");
            expect(productElement).toHaveClass("disabled");
            
        });
    })

 
      it('displays filtered products when selectedCategory is truthy', async() => {
        const mockProps: ProductCardProps = {
            onSelectProduct: jest.fn(),
            selectedProducts: [],
            selectedCategory: 'desayuno',
          };
        
        render(<ProductCard {...mockProps} />);
        await waitFor (() => {
            expect(screen.getByText('Product 1')).toBeInTheDocument();
        });
       
      });

      it('renders the correct styles and handles click correctly', async () => {
        const mockProps: ProductCardProps = {
          onSelectProduct: jest.fn(),
          selectedProducts: [
            {
              id: 1,
              name: 'Selected Product 1',
              price: 10,
              image: 'image-url',
              type: 'desayuno',
              quantity: 1,
            },
          ],
        };
        render(<ProductCard {...mockProps} />);
      
        await waitFor(() => {
          const productElement = screen.getByTestId('product_test_1');
          expect(productElement).toHaveClass('disabled');
          fireEvent.click(productElement);
          expect(mockProps.onSelectProduct).not.toHaveBeenCalled();
        });
      });
      
      

});
