function Home({logo}){
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with me
          </a>
        </header>
      </div>
    );
}

//Exportar la funcion para que los otros scripts accedan a la funcion Home
export default Home;