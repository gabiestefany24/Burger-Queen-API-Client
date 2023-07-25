import { Product } from '../components/productCard/ProductCard';
import { NewProduct, NewUser, User } from '../utils/interface';

// interface Data {
//   accessToken: string,
//   user: {
//       email: string,
//       role: string,
//       id: number,
//   }[];
// }

interface AuthResponse {
  accessToken: string;
  user: User;
}

function requestget(user: string, password: string): Promise<AuthResponse> {
  const loginData = {
    email: user,
    password: password
  };
  
  return fetch('https://burger-queen-api-mock-production-0a91.up.railway.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
      return response.json();
    })
    .then(data => {
        
      return data;
        
      // Aquí puedes realizar acciones adicionales con el token
    })
    .catch(error => {
      console.error('Error al iniciar sesión:', error);
      throw error;
    });
}

const token = localStorage.getItem('token');
  
function sendOrder(order: object): Promise<string> {
  
  return fetch('https://burger-queen-api-mock-production-0a91.up.railway.app/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(order)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al publicar la orden');
      }
      return response.json();
    })
    .then(data => {
      
      return (data);
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

const getProductData = async (token: string): Promise<Product[]> => {
  try {
    const response = await fetch('https://burger-queen-api-mock-production-0a91.up.railway.app/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const getUserData = async (token: string): Promise<User[]> => {
  try {
    const response = await fetch('https://burger-queen-api-mock-production-0a91.up.railway.app/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

function getOrders() {
  return fetch('https://burger-queen-api-mock-production-0a91.up.railway.app/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al traer las órdenes');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
}

function updateDataDelivering(id: number) {
  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset() * 60000; // Get the time zone offset in milliseconds
  const localDate = new Date(currentDate.getTime() - timezoneOffset); // Adjust the date based on the time zone offset
  const formattedDate = localDate.toISOString().slice(0, 19).replace('T', ' ');
  fetch(`https://burger-queen-api-mock-production-0a91.up.railway.app/orders/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      {
        'status': 'delivering',
        'dataDelivering': formattedDate, 
      }
    )
  });
}

function addProduct(product: NewProduct) {
  fetch('https://burger-queen-api-mock-production-0a91.up.railway.app/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      {
        'name': product.name,
        'price': product.price,
        'image': product.image,
        'type': product.type
      }
    )
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al traer los productos');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}

function deleteProduct(id: string) {
  return fetch(`https://burger-queen-api-mock-production-0a91.up.railway.app/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al eliminar producto');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}

function editProduct(id: string, product: NewProduct) {
  return fetch(`https://burger-queen-api-mock-production-0a91.up.railway.app/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      {
        'name': product.name,
        'price': product.price,
        'image': product.image,
        'type': product.type
      }
    )
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al editar el producto');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}

function deleteUser(id: string) {
  return fetch(`https://burger-queen-api-mock-production-0a91.up.railway.app/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al eliminar usuario');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}

function addUser(user: NewUser) {
  fetch('https://burger-queen-api-mock-production-0a91.up.railway.app/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      {
        'email': user.email,
        'password':user.password,
        'role':user.role,
      }
    )
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al traer los usuarios');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}

function editUser(id: string, user: NewUser) {
  return fetch(`https://burger-queen-api-mock-production-0a91.up.railway.app/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      {
        'email': user.email,
        'password':user.password,
        'role':user.role,
       
      }
    )
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al editar el usuario');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}
 
export {
  requestget,
  sendOrder,
  getProductData,
  getOrders,
  updateDataDelivering,
  addProduct,
  getUserData,
  deleteProduct, 
  editProduct, 
  deleteUser,
  addUser,
  editUser
};
  