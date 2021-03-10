import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth"); // below we can use this selector to select specific part of store (AuthState) and have a Type of it
//in that case type is AuthState so we get the autocompletion of auth.user ...

export const isLoggedIn = createSelector(
  selectAuthState, //we could also do state => state["auth"] -> result would be the same
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
