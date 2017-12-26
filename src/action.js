
export const LOAD = 'load_profile';


export function loadProfile(){
  return (dispatch)=>{
    dispatch({type: LOAD, payload: {name: 'teste 1', email: 'teste@something.com', foto: ''}});
  }
}