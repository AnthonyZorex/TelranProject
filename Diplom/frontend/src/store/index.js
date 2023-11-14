import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";


const rootReducer  = combineReducers({
     category:categoryReducer,
     product:productReducer

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));