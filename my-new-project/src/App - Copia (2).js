import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={ 
      hora: '00:00:00'
     };
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);   
  }

  // componentDiUpdate(){
  //   console.log('Atualizou!');
  // }

  render(){
    return(
      <div>
        
        <h1> Meu projeto {this.state.hora} </h1>
      
      </div>
    );
  }
}

export default App;

// export default App;

// class App extends Component{
//   render(){
//     return(
//       <div>
        
//         <h1> Contador </h1>
      
//       </div>
//     );
//   }
// }

// export default App;



// const sequencia = [0, 1, 2, 3, 7, 8, 9];
// sequencia.splice(4, 1, 4, 5, 6);

// const numeros = [1, 2, 6];
// numeros.splice(2, 0, 3, 4, 5);
// var index = numeros.at(-1);
// //procura a primeira ocorrencia
// var index2 = numeros.indexOf(5);

// alert(index2);


// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       nome: 'Daniel',
//       contador: 0
//     };

//     this.aumentar = this.aumentar.bind(this);
//     this.diminuir = this.diminuir.bind(this);
//   }

// aumentar(){
//   let state = this.state;
//   state.contador +=1;
//   state.nome = "Jose";
//   this.setState(state);
// }

// diminuir(){
//   let state = this.state;
//   if(state.contador === 0){
//     alert("Opa chegou a zero!");
//     return;
//   }
//   state.contador -=1;
//   state.nome = "Eu";
//   this.setState(state);
// }

//   render(){
//     return(
//       <div>
//         {this.state.nome}
//         <h1> Contador </h1>
//         <h3> 
//           <button onClick={this.diminuir}> - </button>
//             {this.state.contador} 
//           <button onClick={this.aumentar}> + </button>
//         </h3>
//       </div>
//     );
//   }
// }








// import './App.css';
// import React, {Component} from 'react';

// // const BemVindo = (props) => { //props
// //   return(
// //     <div>
// //       <h2>Bem-vindo(a) {props.nome} </h2>
// //       <h3> Tenho {props.idade} </h3>
// //     </div>
// //   );
// // }

// // const Equipe = (props) => { //props
// //   return(
// //     <div>
// //         <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
// //         <Social fb={props.facebook}/>
// //     </div>
// //   );
// // }

// // const Sobre = (props) => { //props
// //   return(
// //     <div>
// //         <h2> Olá sou o(a) {props.nome} </h2>
// //         <h3> meu cargo é {props.cargo} </h3>
// //         <h3> minha idade é {props.idade} anos </h3> 
// //     </div>
// //   );
// // }

// // const Social = (props) =>{
// //   return(
// //     <div>
// //       <a href={props.fb}> Facebook </a>
// //       <a> Linked </a>
// //       <a> Youtube </a>
// //     </div>
// //   )
// // }


// class Equipe extends Component{
//   render(){
//     return(
//       <div>
//         <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
//         <hr/>
//       </div>
//     );
//   }
// }

// class Sobre extends Component{
//     render(){
//       return(
//         <div>
//           <h2>Olá sou o {this.props.nome} </h2>
//           <h3>Cargo: {this.props.cargo}</h3>
//           <h3>Idade: {this.props.idade}</h3>
//         </div>
//       );
//     }
// }

// function App() {
//   return (
//     <div>
//       {/* SECAO 4:
//       Olá Mundo
//       <BemVindo nome="Daniel" idade= "38"/>
//       <BemVindo nome="Dyna" idade= "42"/>
//       <h1>Curso react</h1> */}


//       {/* <h1> Conheça nossa equipe</h1>
//       <Equipe nome="Daniel" cargo="FullStack" idade="38" facebook="https://google.com"/>
//       <Equipe nome="Elder" cargo="FullStack" idade="33" facebook="https://google.com"/>
//       <Equipe nome="Arthur" cargo="Designer" idade="20" facebook="https://google.com"/> */}

//       <h1> Conheça nossa equipe</h1>
//       <Equipe nome="Daniel" cargo="programador" idade="38 anos"/>
//       <Equipe nome="Elder" cargo="programador" idade="33 anos"/>
//       <Equipe nome="Arthur" cargo="designer" idade="20 anos"/>
//     </div>
//   );
// }

// export default App;
