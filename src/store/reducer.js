
const userInitial = {
    username : '' ,
    password : ''
}
  
  export const reducer = (state = userInitial, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return { ...state, username: action.payload };
       
  
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
  
      default:
        return state;

    }
  };
  