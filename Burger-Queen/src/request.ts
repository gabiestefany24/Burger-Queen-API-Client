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
  export default requestget;

  