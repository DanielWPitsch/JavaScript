import React, {Component} from 'react';

class Membro extends Component{

  constructor(props){
    super(props);
    this.state = {
        nome: props.nome
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    this.setState({nome: 'Daniel'})
  }


  render(){
    return(
      <div>
        <h2> Bem-vindo {this.state.nome} </h2>
        <button onClick={this.entrar}>
          Entrar como Daniel
        </button>
        <button onClick={ ()=> this.setState({nome: ''})}>
          Sair
        </button>
      </div>
    );
  }
}

export default Membro;


//App.js
// import React, {Component} from 'react';
// import Membro from './components/Membro';

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Membro nome='visitante'/>
//       </div>
//     );
//   }
// }

// export default App;