import { NavigateFunction } from 'react-router-dom';

const handleLogout = (navigate: NavigateFunction) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  navigate('/');
  
};
export default  handleLogout; 