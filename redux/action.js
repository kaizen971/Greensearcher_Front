export const SET_USER_FIRSTNAME = 'SET_USER_FIRSTNAME';
export const SET_USER_LASTNAME = 'SET_USER_LASTNAME';
export const SET_USER_ISCONNECT = 'SET_USER_ISCONNECT';
export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_USER_EMAIL = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';

export const setfirstName = firstname => dispatch => {
    dispatch({
        type: SET_USER_FIRSTNAME,
        payload: firstname,
    });
};

export const setlastName = lastname => dispatch => {
    dispatch({
        type: SET_USER_LASTNAME,
        payload: lastname,
    });
};

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_USER_EMAIL,
        payload: email,
    });
};

export const setisConnect = isconnect => dispatch => {
    dispatch({
        type: SET_USER_ISCONNECT,
        payload: isconnect,
    });
};


export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
};