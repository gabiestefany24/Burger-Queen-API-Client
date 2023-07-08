import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react';
import Ordersummary, {OrdersummaryProps} from '../components/ordersummary/ordersummary';
  
jest.mock('../../src/assets/añadir.png', () => ({
    add: jest.fn()
}));
jest.mock('../../src/assets/disminuir.png', () => ({
    reduce: jest.fn()
}));
jest.mock('../../src/assets/cancelorange.png', () => ({
    cancelorange: jest.fn()
}));
jest.mock('../../src/assets/cancelwhite.png', () => ({
    cancelwhite: jest.fn()
}));
jest.mock('../../src/assets/checkwhite.png', () => ({
    checkwhite: jest.fn()
}));
const product = [
    {
        "id": 3,
        "name": "test_malteadafresa",
        "price": 500,
        "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/water.png",
        "type": "Almuerzo",
        "dateEntry": "2022-03-05 15:14:10",
        "quantity":1
    }
]
  

describe('Ordersummary', () => {

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
    it('increasequantity return value is shown in p element',async ()=> {
        render(<Ordersummary {...mockProps} />);
    
        // await waitFor(() => { // ID del producto al que deseas disminuir la cantidad
            const initialQuantity = 2; // Cantidad inicial del producto
            Ordersummary.prototype.setQuantities= (initialQuantity)
            const reduceImage= screen.getByAltText('disminuir')
            
            fireEvent.click(reduceImage);
            
          
            // Verifica que la cantidad se haya reducido en uno
            
            expect(screen.getByTestId(`p_quantity3`)).toBe(String(initialQuantity - 1));
       
            // })


        // expect(screen.getByTestId('p_quantity3')).toHaveTextContent('5')
    });
});