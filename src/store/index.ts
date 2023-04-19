// import { createStore } from 'redux';
import { AnyAction, applyMiddleware, combineReducers,  legacy_createStore as createStore } from "redux";
import { usersReducer } from './users/reducer';
import { modalReducer } from '../store/modal/reducer';
import { tabsReducer } from "./tabs/reducer";
import thunk, { ThunkDispatch } from 'redux-thunk';
import { searchReducer } from "./search/reduser";

 const rootReducer = combineReducers({
     users: usersReducer,
     modal: modalReducer,
     tabs: tabsReducer,
     search:searchReducer
 })

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>; 
export type RootState = ReturnType<typeof store.getState>
export const store = createStore(rootReducer,applyMiddleware(thunk));




