import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";


const rootReducer  = combineReducers({
     category:categoryReducer,
     product:productReducer,
     order:orderReducer,

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));