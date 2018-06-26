const initialState = {
    listSubjects: [],
};

export const subjects = (state = initialState, action) => {
    if (action.type === 'GET_SUBJECTS') {
        return {...state, listSubjects: action.payload.sort((x, y) => -y.SbjPk + x.SbjPk)};
    }
    return state
};