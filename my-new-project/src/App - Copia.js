import './App.css';

const BemVindo = (props) => { //props
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome} </h2>
      <h3> Tenho {props.idade} </h3>
    </div>
  );
}

const Equipe = (props) => { //props
  return(
    <div>
        <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
        <Social fb={props.facebook}/>
    </div>
  );
}

const Sobre = (props) => { //props
  return(
    <div>
        <h2> Olá sou o(a) {props.nome} </h2>
        <h3> meu cargo é {props.cargo} </h3>
        <h3> minha idade é {props.idade} anos </h3> 
    </div>
  );
}

const Social = (props) =>{
  return(
    <div>
      <a href={props.fb}> Facebook </a>
      <a> Linked </a>
      <a> Youtube </a>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* Olá Mundo
      <BemVindo nome="Daniel" idade= "38"/>
      <BemVindo nome="Dyna" idade= "42"/>
      <h1>Curso react</h1> */}


      <h1> Conheça nossa equipe</h1>
      <Equipe nome="Daniel" cargo="FullStack" idade="38" facebook="https://google.com"/>
      <Equipe nome="Elder" cargo="FullStack" idade="33"/>
      <Equipe nome="Arthur" cargo="Designer" idade="20"/>
    </div>
  );
}

export default App;
