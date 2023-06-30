function requestget(user: string, password: string): void {
    const loginData = {
      email: user,
      password: password
    };
  
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then((response) => response.json())
      .then((data) => {
        const token: string = data.accessToken;
        console.log(token);
        // Aquí puedes realizar acciones adicionales con el token
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  }
  
  export default requestget;