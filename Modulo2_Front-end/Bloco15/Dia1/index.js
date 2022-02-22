const Redux = require('redux');

// Primeiro vamos criar a nossa store :

// const store = Redux.createStore();
// console.log(store)

// Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer .
// const reducer = (state) => {
//     return state;
// };


// const store = Redux.createStore(reducer);
// console.log(store)

// Estado com defaut value
// const reducer = (state = { login: false, email: "" }) => {
//     return state;
// };
// console.log(reducer())
    
// const store = Redux.createStore(reducer);
// console.log(store.getState())

const fazerLogin = (email) => ({
    type: "LOGIN",
    email});
  
  const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
  
  const store = Redux.createStore(reducer);
  
  store.dispatch(fazerLogin("alguem@email.com"));
  
  console.log(store.getState());
  
  // { login: true, email: 'alguem@email.com' }