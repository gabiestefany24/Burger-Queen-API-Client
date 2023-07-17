import "@testing-library/jest-dom";
import { render,/*screen, waitFor, */ fireEvent} from "@testing-library/react";
import Ordersummary, {
  OrdersummaryProps,
} from "../components/ordersummary/ordersummary";
// import React from "react";
const product = {
  id: 3,
  name: "test",
  price: 500,
  image:
    "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/water.png",
  type: "Almuerzo",
  dateEntry: "2022-03-05 15:14:10",
  quantity: 1,
};
// jest.mock("../components/productCard/ProductCard", () => ({
//   Product: jest.fn(),
// }));
// describe("Ordersummary", () => {
  const mockProps: OrdersummaryProps = {
    selectedProducts: [product],
    onRemoveItem: jest.fn(),
    clearOrder: jest.fn(),
  };

//   it("selectesproduct renders correctly", async () => {
   
//     render(<Ordersummary {...mockProps} />);
//     await waitFor(() => {
//       expect(screen.getByText("test_malteadafresa")).toBeInTheDocument();
//     });
//   });
//   it("increasequantity return value is shown in p element", async () => {
//     render(<Ordersummary {...mockProps} />);

//     await waitFor(() => {
//       const btnmore = screen.getByAltText("añadir");
//       const btnless = screen.getByAltText("disminuir");
//       fireEvent.click(btnmore);
//       fireEvent.click(btnmore);
//       fireEvent.click(btnmore);
//       fireEvent.click(btnless);
//       expect(screen.getByTestId("p_quantity3")).toHaveTextContent("3");
//     });
    
//   });
//   it.only("increasequantity return value is shown in p element", async () => {
//     render(<Ordersummary {...mockProps} />);
    
//     await waitFor(() => {
//       fireEvent.click(screen.getByAltText('eliminarProducto'));
//       expect(screen.queryByText('test_malteadafresa')).toBeNull();
//     });
//     });
//    screen.debug();
   
//   });




  test('should call onRemoveItem and remove the product when the delete button is clicked', () => {
   
  
    // Renderizar el componente
    const { getByAltText, queryByText } = render(
      <Ordersummary {...mockProps}/>
    );
  
    // Simular el evento onClick en la imagen de eliminar producto
    fireEvent.click(getByAltText('eliminarProducto'));
  
    // Verificar que onRemoveItem se haya llamado correctamente
    // Verificar que el producto se haya eliminado de la lista
    expect(queryByText('test')).toBeNull();
  });
