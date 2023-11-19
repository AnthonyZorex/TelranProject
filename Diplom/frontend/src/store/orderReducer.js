export let ADD_ITEM_ORDER = "ADD_ITEM_ORDER";
export let LOAD_ITEMS = "LOAD_ITEMS";
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

        default:
        return state;
    }

}