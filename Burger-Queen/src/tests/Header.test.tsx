import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Mock de react-router-dom para las pruebas
import Header from "../components/header/Header"
import handleLogout from "../utils/Logout";

// Mockear el módulo handleLogout (puedes ajustar esto según la implementación de tu función handleLogout)
jest.mock("../utils/Logout", () => jest.fn());

describe("Header component", () => {


  test("handleLogout is called when the logout icon is clicked", () => {
    // Simular que el usuario es un admin
    localStorage.setItem("userRole", "admin");

    // Renderizar el componente
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Encontrar el ícono de logout y simular el clic
    const logoutIcon = screen.getByAltText("iconosalida");
    fireEvent.click(logoutIcon);

    // Verificar que la función handleLogout haya sido llamada
    expect(handleLogout).toHaveBeenCalled();

    // Limpiar el localStorage para pruebas adicionales
    localStorage.clear();
  });
});