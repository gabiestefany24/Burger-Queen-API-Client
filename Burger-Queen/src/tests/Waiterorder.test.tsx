import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Waiterorder from '../components/waiterorder/Waiterorder';
import { BrowserRouter as Router } from 'react-router-dom';
import { createOrder } from '../utils/order';
import { Product } from '../components/productCard/ProductCard';
jest.mock('../components/productCard/ProductCard', () => {
  const ProductCardMock = () => <div data-testid="product-card-mock">Mocked ProductCard</div>;
  return ProductCardMock;
});

jest.mock('../components/ordersummary/ordersummary', () => {
  const OrdersummaryMock = ({
    clearOrder,
    createOrder, 
  }: {
    clearOrder: (setClient: React.Dispatch<React.SetStateAction<string>>) => void;
    createOrder: (
      client: string,
      selectedProducts: Product[],
      quantities: { [key: number]: number }
    ) => Promise<string>;
  }) => {
    const [, setClient] = React.useState('');
    const [, setIsOrderCreated] = React.useState(false);
    const mockClearOrder = () => {
      clearOrder(setClient);
    };
    const mockCreateOrder = async () => {
      
      await createOrder('mockClient', [], {});

      setIsOrderCreated(true);
    };
    return (
      <div>
        <button onClick={mockClearOrder}>Borrar Orden</button>
        <button onClick={mockCreateOrder}>Enviar</button>
       
      </div>
    );
  };
  return OrdersummaryMock;
});

jest.mock('../components/waiterorder/waitermodal/Waitermodal', () => {
  const WaitermodalMock = ({ removeModal }: { removeModal: (state: boolean) => void }) => {
    const handleModalClose = () => {
      removeModal(false);
    };

    return (
      <div>
        <span>Modal content</span>
        <button data-testid="modal-close-button" onClick={handleModalClose}>Close</button>
      </div>
    );
  };

  return WaitermodalMock;
});

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue([]), 
}) as jest.Mock;

test('handles category click', async () => {
  render(
    <Router>
      <Waiterorder />
    </Router>
  );
  await waitFor(() => {

    const breakfastButton = screen.getByText('Desayunos');
    fireEvent.click(breakfastButton);

    const selectedCategoryDesayunos = screen.getByText('Desayunos');
    expect(selectedCategoryDesayunos.classList.contains('btnComidaCena')).toBeTruthy();

    const comidaCenaButton = screen.getByText('Comida/Cena');
    fireEvent.click(comidaCenaButton);
 
    const selectedCategoryComidaCena = screen.getByText('Comida/Cena');
    expect(selectedCategoryComidaCena.classList.contains('btnComidaCena')).toBeTruthy();
  });

});

test('renders product cards in ProductCardMock component', async() => {

  render(
    <Router>
      <Waiterorder />
    </Router>
  );

  await waitFor(() => {
    const productCardMock = screen.getByTestId('product-card-mock');
    expect(productCardMock).toBeInTheDocument();
    fireEvent.click(productCardMock);
  });
 
});

test('clears the order', async () => {
  
  render(
    <Router>
      <Waiterorder />
    </Router>
  );
 
  await waitFor(() => {
    const clearOrderButton = screen.getByText('Borrar Orden');
    expect(clearOrderButton).toBeInTheDocument();
    fireEvent.click(clearOrderButton);

  });
 
});

jest.mock('../utils/order'); 

test('handles order creation', async () => {
  (createOrder as jest.Mock).mockResolvedValue('Order created successfully');

  render(
    <Router>
      <Waiterorder />
    </Router>
  );

  await waitFor(() => {
    const sendOrderButton = screen.getByText('Enviar');
    fireEvent.click(sendOrderButton);
  });

});

test('closing modal by changing its state', async () => {
  
  (createOrder as jest.Mock).mockResolvedValue('Order created successfully');

  render(
    <Router>
      <Waiterorder />
    </Router>
  );

  await waitFor(() => {
    const sendOrderButton = screen.getByText('Enviar');
    fireEvent.click(sendOrderButton);
  });

  const waiterModal = screen.queryByText('Modal content');
  expect(waiterModal).toBeInTheDocument();
  const closeButton = screen.getByTestId('modal-close-button');
  fireEvent.click(closeButton);
 
  await waitFor(() => {
    expect(screen.queryByText('Modal content')).toBeNull();
  });

});

