import { Product } from "../components/productCard/ProductCard";

function requestget(user: string, password: string): Promise<string> {
    const loginData = {
      email: user,
      password: password
    };
  
    return fetch('http://localhost:8080/login', {
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
        const token: string = data.accessToken;
        console.log(token)
        return token;
        // Aquí puedes realizar acciones adicionales con el token
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        throw error;
      });
  }

const token = localStorage.getItem('token');
  
function sendOrder(order: object): Promise<string> {
  
  
  return fetch('http://localhost:8080/orders', {
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
      console.log("data:", data)
      return (data)
     })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

const getProductData = async (token: string): Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:8080/products', {
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

function getOrders() {
  return fetch("http://localhost:8080/orders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al traer las órdenes");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

function updateDataDelivering(id: number) {
  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset() * 60000; // Get the time zone offset in milliseconds
  const localDate = new Date(currentDate.getTime() - timezoneOffset); // Adjust the date based on the time zone offset
  const formattedDate = localDate.toISOString().slice(0, 19).replace('T', ' ');
  fetch(`http://localhost:8080/orders/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      {
        "status": "delivering",
        "dataDelivering": formattedDate, 
      }
    )
  })
}
  
 
export {
  requestget,
  sendOrder,
  getProductData,
  getOrders,
  updateDataDelivering,
};

  