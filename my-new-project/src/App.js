import './App.css';

const BemVindo = (props) => { //props
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome} </h2>
      <h3> Tenho {props.idade} </h3>
    </div>
  );
}

function App() {
  return (
    <div>
      Olá Mundo
      <BemVindo nome="Daniel" idade= "38"/>
      <BemVindo nome="Dyna" idade= "42"/>
      <h1>Curso react</h1>
    </div>
  );
}

export default App;
