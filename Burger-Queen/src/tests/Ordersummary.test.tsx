import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Ordersummary, {
  OrdersummaryProps,
} from "../components/ordersummary/ordersummary";
import React from "react";

jest.mock("../../src/assets/añadir.png", () => ({
  add: jest.fn(),
}));
jest.mock("../../src/assets/disminuir.png", () => ({
  reduce: jest.fn(),
}));
jest.mock("../../src/assets/cancelorange.png", () => ({
  cancelorange: jest.fn(),
}));
jest.mock("../../src/assets/cancelwhite.png", () => ({
  cancelwhite: jest.fn(),
}));
jest.mock("../../src/assets/checkwhite.png", () => ({
  checkwhite: jest.fn(),
}));
const product = [
  {
    id: 3,
    name: "test_malteadafresa",
    price: 500,
    image:
      "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/water.png",
    type: "Almuerzo",
    dateEntry: "2022-03-05 15:14:10",
    quantity: 1,
  },
];

describe("Ordersummary", () => {
  const mockProps: OrdersummaryProps = {
      selectedProducts: [...product],
      onRemoveItem: jest.fn(),
      clearOrder : jest.fn()
  }

  // it('selectesproduct renders correctly', async () => {
  //     render(<Ordersummary {...mockProps} />);

  //     await waitFor(() => {
  //         expect(screen.getByText('test_malteadafresa')).toBeInTheDocument()
  //     })
  // });
  // it('increasequantity return value is shown in p element',async ()=> {
  //     render(<Ordersummary {...mockProps} />);

  //     await waitFor(() => {
  //         const button = screen.getByAltText('añadir')
  //         fireEvent.click(button);
  //         })
  //     expect(screen.getByTestId('p_quantity3')).toHaveTextContent('2')
  // });

    it("debe tener un elemento <p> con valor 5", () => {
        const mockQuantities: { [key: number]: number } = {
            123: 5, // Establecer el valor deseado para quantities
          };
      
          const useStateMock = jest.spyOn(React, 'useState');
          useStateMock.mockReturnValueOnce([mockQuantities, jest.fn()]);
      
          render(<Ordersummary {...mockProps} />);
      
          // Verifica que el elemento <p> tenga el valor esperado (5)
          const pElement = screen.getByTestId('p_quantity3'); // Asegúrate de que el ID coincida con el elemento deseado
          console.log('AQUI',pElement.textContent);
          expect(pElement).toHaveTextContent('5');
      
          // Restaurar la implementación original de useState
          useStateMock.mockRestore();
        });
        });

