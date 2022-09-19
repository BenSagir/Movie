/* eslint-disable prettier/prettier */
export const ADD_FAV = 'ADD_FAV';
export const RM_FAV = 'RM_FAV';

export const addFav = (fav: string) => (dispatch: any) => {
    dispatch({
        type: ADD_FAV,
        payload: fav,
    });
};

export const removeFav = (fav: string) => (dispatch: any) => {
    dispatch({
        type: RM_FAV,
        payload: fav,
    });
};
