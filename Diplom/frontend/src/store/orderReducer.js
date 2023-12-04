export let ADD_ITEM_ORDER = "ADD_ITEM_ORDER";
export let LOAD_ITEMS = "LOAD_ITEMS";
export let CLEAN_ORDER_ITEM ="CLEAN_ORDER_ITEM";
export const defaultValue = {
    order:[]
}

export const orderReducer = (state = defaultValue,active)=>{

    switch(active.type)
    {
        case LOAD_ITEMS:{
            return state.order;
        }
        case ADD_ITEM_ORDER:{
            return {...state,order:[...state.order,active.payload]}
        }
        case CLEAN_ORDER_ITEM:{
            return {...state,order:[...state.order.filter((a)=>a['id']!=active.payload )]}
        }
        default:
        return state;
    }

}