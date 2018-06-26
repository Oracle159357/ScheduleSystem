const initialState = {
    list: [],
};

export const departaments = (state = initialState, action) => {
    if (action.type === 'GET_DEPARTAMENTS') {
        return {...state, list: action.payload.sort((x, y) => -y.DepPk + x.DepPk)};
    }
    return state
};