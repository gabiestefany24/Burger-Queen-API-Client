import { NavigateFunction } from 'react-router-dom';


const handleLogout = (navigate: NavigateFunction) => {
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  console.log('Se Jue');
  navigate('/');
   
    
  // Opcionalmente, puedes realizar otras tareas de limpieza o redirigir a una página específica después del cierre de sesión.
};
export default  handleLogout; 