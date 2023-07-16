import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Waiterorder from '../components/waiterorder/Waiterorder';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../components/productCard/ProductCard', () => {
  const ProductCardMock = () => <div data-testid="product-card-mock">Mocked ProductCard</div>;
  return ProductCardMock;
});



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

test('renders product cards in ProductCardMock component', async() => {

  render(
    <Router>
      <Waiterorder />
    </Router>
  );

  await waitFor(() => {
     // Assert the presence of product cards using the updated data-testid attribute
     const productCardMock = screen.getByTestId('product-card-mock');
     expect(productCardMock).toBeInTheDocument();
     fireEvent.click(productCardMock);
     const selectedProducts = screen.getByTestId('selected-products');
    expect(selectedProducts.textContent).toContain('Mocked ProductCard');
  })

 
});

