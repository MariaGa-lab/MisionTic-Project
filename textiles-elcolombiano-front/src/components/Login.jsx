import '../App.css';


export function Login() {

  return (
    <div className="App container">
      <div className="card">
        <div className="card-body">
          <div>
            <b>Iniciar sesión</b>
            <h1> Bienvenido a textiles elColombiano </h1>
          </div>
          <button
            variant="contained"
            color="inherit"
            startIcon={
              <svg
                src={
                  "https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"
                }
              />
            }
          >
            Iniciar Con Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login