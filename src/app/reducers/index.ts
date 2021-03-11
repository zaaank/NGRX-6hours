import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer // this allow to use the time-travelling debugger
};


export function logger(reducer: ActionReducer<any>) : ActionReducer<any> {

  return (state, action) => { //we take state and action
    console.log("State before: ", state);  //execute code
    console.log("action", action)

    return reducer(state, action); //and return new state and action which will go to the next reducer of the store. metareducer run before reducer
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
