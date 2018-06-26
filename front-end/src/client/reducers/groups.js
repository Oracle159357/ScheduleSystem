const initialState = {
    listGroups: [],
};

export const groups = (state = initialState, action) => {
    if (action.type === 'GET_GROUPS') {
        return {...state, listGroups: action.payload.sort((x, y) => -y.GrpPk + x.GrpPk)};
    }
    return state
};