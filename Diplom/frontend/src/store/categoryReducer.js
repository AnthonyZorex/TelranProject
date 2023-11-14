export const LOAD_CATEGORY = 'LOAD_CATEGORY';
export const CLEAN_CATEGORY = 'CLEAN_CATEGORY';

export const defaultValue = {
      category: []
}

export const categoryReducer = (state = defaultValue, active)=>{
  switch(active.type)
  {
    case LOAD_CATEGORY:{
        return {...state,category:[...state.category,...active.payload]}
    }
    case CLEAN_CATEGORY:
      return defaultValue;
    default:
        return state;
  }
}

export const addCategoriAction=(payload)=>({type:LOAD_CATEGORY,payload});
