import { CLEAN_CATEGORY, addCategoriAction} from "../categoryReducer"
import { LOAD_ITEMS } from "../orderReducer";
import { CLEAN_PRODUCT, SORT_SALE_PRODUCT,SORT_PRICE_TO_PRODUCT,addProductAction,SORT_PRICE_FROM_PRODUCT } from "../productReducer";

export const fetchCategory=()=>{
    return function(dispatch)
    {
        fetch('http://localhost:3333/categories/all')
            .then(res=>res.json())
            .then(json=>dispatch(addCategoriAction(json)));
    }
}
export const fetchProduct=()=>{
  return function(dispatch)
  {
      fetch('http://localhost:3333/products/all')
          .then(res=>res.json())
          .then(json=>dispatch(addProductAction(json)));
  }
}

export function ClearCategory() {
    return {
      type: CLEAN_CATEGORY,
    };
  }

  export function Load_Items() {
    return {
      type: LOAD_ITEMS,
    };
  }
  
  export function sort_sale_product() { 
   return {
      type:SORT_SALE_PRODUCT,
    }
  }
  export function sort_price_to(){
    return{
      type:SORT_PRICE_TO_PRODUCT,
    }
  }
  export function sort_price_from(){
    return{
      type:SORT_PRICE_FROM_PRODUCT,
    }
  }


export function ClearProduct() {
    return {
      type: CLEAN_PRODUCT,
    };
  }
