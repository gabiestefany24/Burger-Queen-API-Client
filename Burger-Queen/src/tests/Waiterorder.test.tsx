import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Waiterorder from '../components/waiterorder/Waiterorder';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../components/productCard/ProductCard', () => ({
  __esModule: true,
  default: jest.fn(),
}));

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue([]), // Return an empty array as the product data
}) as jest.Mock;

test('handles category click', async () => {
  render(
    <Router>
      <Waiterorder />
    </Router>
  );
  await waitFor(() => {
    // Click the "Desayunos" button
    const breakfastButton = screen.getByText('Desayunos');
    fireEvent.click(breakfastButton);

    // Assert that the selected category is updated correctly
    const selectedCategoryDesayunos = screen.getByText('Desayunos');
    expect(selectedCategoryDesayunos.classList.contains('btnComidaCena')).toBeTruthy();

    // Click the "Comida/Cena" button
    const comidaCenaButton = screen.getByText('Comida/Cena');
    fireEvent.click(comidaCenaButton);

    // Assert that the selected category is updated correctly
    const selectedCategoryComidaCena = screen.getByText('Comida/Cena');
    expect(selectedCategoryComidaCena.classList.contains('btnComidaCena')).toBeTruthy();
  })

});
/* 
test('handles selecting a product', async () => {
  render(
    <Router>
      <Waiterorder />
    </Router>
  );

  await waitFor(() => {
    // Select a product by clicking on it
  const productCard = screen.getByTestId('product_test_1');
  fireEvent.click(productCard);

  // Assert that the selected product is added to the selectedProducts state
  const selectedProduct = screen.getByTestId('product_test_1');
  expect(selectedProduct).toBeInTheDocument();
  })
  
}); */
