import  "@testing-library/jest-dom";
import { render, fireEvent, screen} from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";
import Chefview from "../components/chefview/Chefview";


jest.mock("../../src/assets/smallLogo.png", () => ({
    add: jest.fn(),
  }));

  jest.mock("../../src/assets/searchIcon.png", () => ({
    add: jest.fn(),
  }));

  
  jest.mock("../../src/assets/outicon.png", () => ({
    add: jest.fn(),
  }));

  jest.mock("../../src/assets/iconready.png", () => ({
    add: jest.fn(),
  }));

  jest.mock("../../src/assets/icondelivered.png", () => ({
    add: jest.fn(),
  }));

  jest.mock("../../src/assets/iconclock.png", () => ({
    add: jest.fn(),
  }));



  jest.mock('../components/orderCard/OrderCard', () => {
    const OrderCardMock = () => <div data-testid="product-card-mock">Mocked ProductCard</div>;
    return OrderCardMock;
  });

  

describe("Chefview component", () => {

  test('button Historial', () => {
  

    render(
      <BrowserRouter>
         <Chefview />
      </BrowserRouter>
    );


   
    screen.debug()
    const historyButton = screen.getByText('Historial');

    // Verificar el estado inicial
    expect(screen.getByTestId('status')).toHaveTextContent('pending');

    // Simular clic en el botón "Historial"
    fireEvent.click(historyButton);

    // Verificar el estado actualizado
    expect(screen.getByTestId('status')).toHaveTextContent('delivering');
 
    
  });


  test('button Órdenes', () => {
   
    render(
      <BrowserRouter>
        <Chefview />
      </BrowserRouter>
    );
   
    screen.debug()
    const OrdenButton = screen.getByText('Órdenes');

    // Verificar el estado inicial
    expect(screen.getByTestId('status')).toHaveTextContent('pending');

    // Simular clic en el botón "Historial"
    fireEvent.click(OrdenButton);

    // Verificar el estado actualizado
    expect(screen.getByTestId('status')).toHaveTextContent('pending');
 
    
  });
});


 





