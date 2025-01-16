import React, {Component} from 'react';
import './estilo.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'vai'
    }

    this.timer= null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.state.botao ='vai';
    }else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      this.state.botao = 'parar';
    }
    this.setState(this.state);
  }

  limpar(){
    if(this.timer == null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero=0;
    state.botao = 'vai';
    this.setState(state);

  }

    render(){
      return(
        <div className='container'>
          <img src={require('./assets/cronometro.png')} className='img' alt="Descrição da imagem"/>
          <a className='timer'>{this.state.numero.toFixed(1)}</a>
          <div className='areaBotao'>
            <a className='botao' onClick={this.vai}> {this.state.botao} </a>
            <a className='botao' onClick={this.limpar}> limpar</a>
          </div>
        </div>
      );
    }
  }
  
  export default App; 


//---------------------------------------------

// import './estilo.css';

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       textoFrase:'Frase da sorte'
//     }

//     this.frases = ["A sorte sorri para os ousados.", 
//                   "Cada novo dia é uma nova chance para a sorte brilhar.",
//                   "Acreditar na sorte é acreditar em si mesmo.",
//                   "O sucesso é a junção da preparação com a oportunidade.",
//                   "A sorte favorece as mentes preparadas.",
//                   "O universo conspira a favor daqueles que acreditam.",
//                   "Uma mente positiva atrai boas vibrações.",
//                   "A sorte está ao virar da esquina, basta um passo corajoso.",
//                   "Com um coração grato, a sorte se multiplica.",
//                   "A sorte é o encontro do trabalho árduo com a oportunidade certa."
//                   ];
//     this.quebraBiscoito = this.quebraBiscoito.bind(this);
//   }

//   quebraBiscoito(){
//     let state = this.state;
//     let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
//     state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
//     this.setState(state);
//   }

//   render(){
//     return(
//       <div className='container'>
//         <img src={require('./assets/biscoito.png')} className='img' alt="Descrição da imagem"></img>
//         <Botao nome="abrir" acaoBtn={this.quebraBiscoito}/>
//         <h3 className='textoFrase'> {this.state.textoFrase} </h3>
      
//       </div>
//     );
//   }

// }

// class Botao extends Component{
//   render(){
//     return(
//       <div>
//         <button onClick={this.props.acaoBtn}>Abrir biscoito</button>
//       </div>
//     )
//   }
// }
  
// export default App; 


//-------------------------------------------------

// class App extends Component{

//     constructor(props){
//       super(props);
//       this.state = {
//         form:{
//           nome: '',
//           email: '',
//           senha: '',
//           sexo: ''
//         }
//       };

//       this.dadosForm = this.dadosForm.bind(this);
//     }

//     dadosForm(e){
//       let form = this.state.form;
//       form[e.target.name] = e.target.value;
//       this.setState({form: form});
//     }

//       render(){
//         return(
//           <div>
            
//             <h1> Formulario </h1>
//             {this.state.erro && <p> {this.state.erro} </p>}
//             <form onSubmit={this.dadosForm}>
//               <label>Nome:</label>
//               <input type="text" name="nome" value={this.state.form.nome} 
//                 onChange= { this.dadosForm}/> <br/>
//               <label>Email:</label>
//               <input type="email" name="email" value={this.state.form.email} 
//                 onChange= { this.dadosForm}/> <br/>
//               <label>Senha:</label>
//               <input type="password" name="senha" value={this.state.form.senha} 
//                 onChange= { this.dadosForm}/> <br/>
//               Sexo:
//                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
//                   <option value="masculino"> Masculino</option>
//                   <option value="feminino"> Feminino</option>
//                </select><br/>
//               <button type="submit"> Cadastrar </button>
//             </form>

//             <div>
//               <h3> {this.state.form.email}</h3>
//               <h3> {this.state.form.senha}</h3>
//               <h3> {this.state.form.sexo}</h3>
//             </div>
          
//           </div>
//         );
//       }
//     }
    
//     export default App; 


// class App extends Component{

//     constructor(props){
//       super(props);
//       this.state = {
//         email: 'seu email',
//         senha: '',
//         sexo: ''
//       }

//       this.trocaEmail = this.trocaEmail.bind(this);
//       this.trocaSexo = this.trocaSexo.bind(this);
//     }

//     trocaEmail(e){
//       let entrada = e.target.value;
//       this.setState({email: entrada});
//     }

//     trocaSexo(e){
//       let entrada = e.target.value
//       this.setState({sexo:entrada});
//     }
  
//       render(){
//         return(
//           <div>
//             <h2> Login </h2>
//             Email: 
//               <input type="email" name="email" value={this.state.email} 
//                 onChange={this.trocaEmail}/> <br/>
//             Senha:
//               <input type="password" name="senha" value={this.state.senha} 
//                 onChange={(e)=> this.setState({senha: e.target.value})}/> <br/>
//             Sexo:
//               <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
//                 <option value="masculino"> Masculino</option>
//                 <option value="feminino"> Feminino</option>
//               </select>

//               <div>
//                 <h3> {this.state.email}</h3>
//                 <h3> {this.state.senha}</h3>
//                 <h3> {this.state.sexo}</h3>
//               </div>
//           </div>
//         );
//       }
//     }
    
//     export default App; 

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       feed:[
//         {id: 1, username: "Daniel", curtidas: 10, comentarios:2},
//         {id: 2, username: "Elder", curtidas: 100, comentarios:20},
//         {id: 3, username: "Arthur", curtidas: 1000, comentarios:200}
//       ]
//     }
//   }

//     render(){
//       return(
//         <div>
          
//           {this.state.feed.map((item) =>{
//             return(
//               <Feed key={item.id} username={item.username}
//                 curtidas={item.curtidas} comentarios={item.comentarios}/>
//             )
//           })}
        
//         </div>
//       );
//     }
//   }
  
//   export default App; 

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       status:false
//     };

//     this.sair = this.sair.bind(this);
//     this.entrar = this.entrar.bind(this);
//   }

//   sair(){
//     this.setState({status: false});
//   }

//   entrar(){
//     this.setState({status: true});
//   }

//   render(){
//     return(
//       <div>
//         {this.state.status ?
//           <div>
//             <h2> Bem-vindo ao sistema </h2>
//             <button onClick={this.sair}> Sair </button>
//           </div> :
        
//         <div>
//           <h2> Curso React JS </h2>
//           <button onClick={this.entrar}> Entrar no sistema </button>
//         </div>
//         }
//       </div>
//     );
//   }
// }

// export default App;

/* //
//class App extends Component{
//   constructor(props){
//     super(props);
//     this.state ={ 
//       hora: '00:00:00'
//      };
//   } */

/* //   componentDidMount(){
//     setInterval(() => {
//       this.setState({hora: new Date().toLocaleTimeString()})
//     }, 1000);   
//   }

  // componentDiUpdate(){
  //   console.log('Atualizou!');
  // }

  //componentWillUpdate() É executado somente quando shouldComponentUpdatedevolver true.
  

//   render(){
//     return(
//       <div>
        
//         <h1> Meu projeto {this.state.hora} </h1>
      
//       </div>
//     );
//   }
// }

// export default App;

//-------------------------

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

// ---------------------------------

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
//       <h1>Curso react</h1> */


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

// ----------------------

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {

//     }
//   }

//     render(){
//       return(
//         <div>
          
//           <h1> Contador </h1>
        
//         </div>
//       );
//     }
//   }
  
//   export default App; 