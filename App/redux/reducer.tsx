/* eslint-disable prettier/prettier */
import { Action } from 'redux';
import { ADD_FAV, RM_FAV } from './actions';

const initialState = {
    fav: [] as string[],
};
export interface ActionWithPayload<T> extends Action {
    payload: T;
}
export function favReducer(state = initialState, action: ActionWithPayload<string>): typeof state {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, fav: [...state.fav, action.payload] };
        case RM_FAV:
            return { ...state, fav: state.fav.filter(f => f !== action.payload) };
        default:
            return state;
    }
}
