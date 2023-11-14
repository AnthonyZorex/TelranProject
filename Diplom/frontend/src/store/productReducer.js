export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const CLEAN_PRODUCT = 'CLEAN_CATEGORY';
export const SORT_SALE_PRODUCT = 'SORT_SALE_PRODUCT';
export const SORT_PRICE_FIRST_ARG_PRODUCT = 'SORT_PRICE_FIRST_ARG_PRODUCT';
export const SORT_PRICE_SECOND_ARG_PRODUCT = 'SORT_PRICE_SECOND_ARG_PRODUCT';
export const SORT_PRICE_TO_PRODUCT = 'SORT_PRICE_TO_PRODUCT';
export const SORT_PRICE_FROM_PRODUCT = 'SORT_PRICE_FROM_PRODUCT';
export const defaultValue = {
    product: []
}

export const productReducer = (state = defaultValue, active)=>{
switch(active.type)
{
  case LOAD_PRODUCT:{
      return {...state,product:[...state.product,...active.payload]}
  }
  case SORT_SALE_PRODUCT:{
    return {...state,product:state.product.filter((a)=>a['discont_price']!=null)}
  }
  case SORT_PRICE_FIRST_ARG_PRODUCT:{
    return {...state,product:state.product.filter((a)=>a['price']>=active.payload )}
  }
  case SORT_PRICE_SECOND_ARG_PRODUCT:{
    return {...state,product:state.product.filter((a)=>a['price']<=active.payload )}
  }

  case SORT_PRICE_TO_PRODUCT:{
    return {...state,product:[...state.product].sort((a, b) => b['price']-a['price'] )}
  }
  case SORT_PRICE_FROM_PRODUCT:{
    return {...state,product:[...state.product].sort((a, b) => a['price']-b['price'] )}
   }
  case CLEAN_PRODUCT:
    return defaultValue;

  default:
      return state;
}}
export const addProductAction=(payload)=>({type:LOAD_PRODUCT,payload});
