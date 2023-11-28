
const userInitial = {
    username : '' ,
    password : '',
    token : ''
}
  
  export const reducer = (state = userInitial, action) => {
    switch (action.type) {
      // case 'SET_TOKEN' :
      //   return {...state , token:action.payload }
      default:
        return state;

    }
  };
  