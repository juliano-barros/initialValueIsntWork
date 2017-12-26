

import { LOAD } from './action';


const INITIAL_STATE = {
  name: '',
  email: '',
  foto: ''
}

export default (state = INITIAL_STATE, action)=>{

  switch(action.type){
    case LOAD:
      return { ...state, name: action.payload.name, email: action.payload.email };
    default:
      return state;
  }

}

