const initialState = {
    listTeachers: [],
};

export const teachers = (state = initialState, action) => {
    if (action.type === 'GET_TEACHERS') {
        return {...state, listTeachers: action.payload.sort((x, y) => -y.TchPk + x.TchPk)};
    }
    return state
};