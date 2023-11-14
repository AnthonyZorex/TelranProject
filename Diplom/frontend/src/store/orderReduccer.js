export const ADD_ORDER = 'ADD_ORDER';
export const defaultValue = {
    order: []
}

export const orderReducer = (state = defaultValue, active)=>{
switch(active.type)
{
  case LOAD_PRODUCT:{
      return {...state,order:[...state.order,...active.payload]}
  }

  default:
      return state;
}}


export const addProductAction=(payload)=>({type:ADD_ORDER,payload});