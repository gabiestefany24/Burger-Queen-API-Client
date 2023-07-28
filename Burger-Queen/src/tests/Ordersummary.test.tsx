import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Ordersummary, {
  OrdersummaryProps,
} from '../components/ordersummary/ordersummary';

const product = {
  id: 3,
  name: 'test',
  price: 500,
  image: 'https://img.com/test.png',
  type: 'Almuerzo',
  dateEntry: '2022-03-05 15:14:10',
  quantity: 1,
};

const mockProps: OrdersummaryProps = {
  selectedProducts: [product],
  onRemoveItem: jest.fn(),
  clearOrder: jest.fn(),
  createOrder: jest.fn(),
};

it('selectesproduct renders correctly', async () => {
  render(<Ordersummary {...mockProps} />);
  await waitFor(() => {
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
it('increasequantity return value is shown in p element', async () => {
  render(<Ordersummary {...mockProps} />);

  await waitFor(() => {
    const btnmore = screen.getByAltText('añadir');
    const btnless = screen.getByAltText('disminuir');
    fireEvent.click(btnmore);
    fireEvent.click(btnmore);
    fireEvent.click(btnmore);
    fireEvent.click(btnless);
    expect(screen.getByTestId('p_quantity3')).toHaveTextContent('3');
  });
});
it('onRemoveItem function is called', async () => {
  render(<Ordersummary {...mockProps} />);

  await waitFor(() => {
    fireEvent.click(screen.getByAltText('eliminarProducto'));
    expect(mockProps.onRemoveItem(product.id));
  });
});

test('handleCreateOrder function is called', async () => {
  const createOrder = jest.fn();
  render(<Ordersummary {...mockProps} />);
  await waitFor(() => {
    const input = screen.getByTestId('clientName');
    input.innerHTML = 'Hi';
    expect(createOrder).toHaveBeenCalled;
  });
});

test('should call onRemoveItem when the delete button is clicked', async () => {
  render(<Ordersummary {...mockProps} />);
  await waitFor(() => {
    fireEvent.click(screen.getByText('Borrar Orden'));
    expect(mockProps.clearOrder).toHaveBeenCalled;
  });
});
