import handleLogout from '../utils/Logout';


describe('handleLogout function', () => {
  test('should remove "token" and "userRole" from localStorage', () => {
    localStorage.setItem('token', 'sampleToken');
    localStorage.setItem('userRole', 'admin');

    const mockNavigate = jest.fn();
    handleLogout(mockNavigate);

    expect(localStorage.getItem('token')).toBe(null);
    expect(localStorage.getItem('userRole')).toBe(null);
  });

  test('should navigate to the home page ("/")', () => {
    const mockNavigate = jest.fn();
    handleLogout(mockNavigate);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  
});