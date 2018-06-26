const initialState = {
    listRooms: [],
};

export const rooms = (state = initialState, action) => {
    if (action.type === 'GET_ROOMS') {
        return {...state, listRooms: action.payload.sort((x, y) => -y.RomPk + x.RomPk)};
    }
    return state
};