import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <form>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </header>
    </div>
  );
}

export default App;
