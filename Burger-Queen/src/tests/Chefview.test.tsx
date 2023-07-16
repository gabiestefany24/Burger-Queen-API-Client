import { render, fireEvent, screen} from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";
import Chefview from "../components/chefview/Chefview";


import "@testing-library/jest-dom/extend-expect";

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

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([]), // Return an empty array as the product data
  }) as jest.Mock;

  jest.mock('../components/orderCard/OrderCard', () => {
    const OrderCardMock = () => <div data-testid="product-card-mock">Mocked ProductCard</div>;
    return OrderCardMock;
  });

  jest.mock('../components/waiterorder/waiterheader/Waiterheader', () => {
    const WaiterheaderMock = () => <div data-testid="product-card-mock">Mocked ProductCard</div>;
    return WaiterheaderMock;
  });

describe("Chefview component", () => {
  
  // test("should render without errors", () => {
  //   const { container } =render(

  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/chefview" element={<Chefview />} />
  //   </Routes>
  //   </BrowserRouter>
  //    ); 
  //   //render();
  //   const historyButton = screen.getByText('Historial');
   
  //   expect(historyButton).toBeInTheDocument();
  //   expect(container).toBeInTheDocument();
  // });

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

  // test('logout button calls handleLogout function', () => {
  // // Mock de la función handleLogout
  // const mockHandleLogout = jest.fn();

  // // Renderiza el componente, pasando el mock de handleLogout como prop
  // render(
  //   <BrowserRouter>
    
  //     <Chefview  />
     
  //   </BrowserRouter>
  // );

  // // Encuentra el elemento del botón de logout
  // const logoutButton = screen.getByAltText('iconosalida');

  // // Simula un clic en el botón de logout
  // fireEvent.click(logoutButton);

  // // Verifica si la función handleLogout se llamó correctamente
  // expect(mockHandleLogout).toHaveBeenCalled();

   
  // });
});


 





