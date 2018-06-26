const initialState = {
    listLectures: [],
};

export const lectures = (state = initialState, action) => {
    if (action.type === 'GET_LECTURES') {
        return {...state, listLectures: action.payload.sort((x, y) => -y.LctPk + x.LctPk)};
    }
    return state
};