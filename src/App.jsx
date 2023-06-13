import './index.css';

function App() {

  const irForms = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Admin' && password === '123456') {
      alert('Credenciales Correctas !!!!!');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <>
    <div className='container'>
      <form>
        <h1 className='titleLog'>Log In</h1>
        <hr />

        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" name="username" required className="username"></input>
        <br />

        <hr />

        <label htmlFor="password">Clave</label>
        <input type="password" id="password" name="password" required className="password"></input>
        <br />

        <hr />

        <button onClick={irForms} className='godButton'>Iniciar sesión</button>

        <hr />

        <div>
          <button className='godButton2'><a href="./src/formulario.html" className='godButton2'>Ir a formulario</a></button>
        </div>
        
      </form>
    </div>

    </>
  )
}

export default App
